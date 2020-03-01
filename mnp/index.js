import { parse } from 'url'
import fonts from './fonts'
import installPotrace from './potrace'

const font = fonts[Math.floor(Math.random() * fonts.length)]

export default {
  mnpQuestions: ['license', 'keywords'],
  questions: {
    'URL': {
      getDefault ({ org, name }) {
        return `https://${org}.github.io/${name}/`
      },
      alias: 'https://mnpjs.github.io/splendid/',
      async afterQuestions({ writeFileSync }, url, { org, name }) {
        const def = `https://${org}.github.io/${name}/`
        if (url == def) return
        const { host } = parse(url)
        writeFileSync('docs/CNAME', host)
      },
    },
    keepHelp: {
      text: 'Keep help',
      confirm: true,
      async afterQuestions({ updateFiles, removeFiles, rm }, keep) {
        if (keep) await updateFiles([
          {
            re: /<!-- help: /gm,
            replacement() {
              this.debug('Updating help in %s', this.path)
              return '<!-- '
            },
          },
        ], { extensions: ['html', 'md'] })
        else {
          await updateFiles([
            {
              re: /^ *<!-- help: [\s\S]+? -->\s*/gm,
              replacement() {
                this.debug('Removing help from %s', this.path)
                return ''
              },
            },
          ], { extensions: ['html', 'md'] })
          await updateFiles([
            {
              re: /\n\/\/ start help[\s\S]+?\/\/ end help\n?/gm,
              replacement() { return '' },
            },
          ], { file: 'pages/index.js' })
          await updateFiles([
            {
              re: /, '..\/help\/.+?'/gm,
              replacement() { return '' },
            },
          ], { file: 'splendid/index.js' })
          removeFiles(/splendid\/.*?\/README\.md$/)
          removeFiles(/pages\/README\.md$/)
          await rm('splendid/comps/help')
          await rm('help')
        }
      },
    },
  },
  async afterInit({ org, name, URL, keepHelp }, api) {
    const { updateFiles, github, loading, renameFile, initManager } = api

    await initManager()

    await updateFiles({
      re: /Lobster/g, // {{ font }}
      replacement() {
        this.debug('Setting font in %s', this.path)
        return font
      },
    }, { extensions: ['html', 'css'] })
    await loading('Setting GitHub homepage', github.repos.edit(org, name, {
      homepage: URL,
    }))
    renameFile('docs/.index.html', 'docs/index.html')
    await loading('Enabling Pages on docs', github.pages.enable(org, name))

    const { pathname } = parse(URL)
    await updateFiles([{
      re: /mount: '\/splendid',/g,
      replacement() {
        if (pathname == '/') return `/* mount: '${pathname}', */`
        return `mount: '${pathname}',`
      },
    },
    ], { file: 'splendid/index.js' })
    await updateFiles([{
      // re: /\/\/start mount\s+mount: '\/{{ name }}', \/\/ end mount/,
      re: /mount: '\/splendid\/', /g,
      replacement() {
        if (pathname == '/') return ''
        return `mount: '${pathname}', `
      },
    },
    ], { files: [
      'splendid/comps/index.js',
      ...(keepHelp ? ['splendid/comps/help/images.js'] : []),
    ] })
    await installPotrace(api)
    await loading('Fetching splash', splash(api))
  },
}

const splash = async ({ download, writeFileSync }) => {
  const photo = await download('https://source.unsplash.com/collection/923267/600x400')
  writeFileSync('splendid/img/splash.jpg', photo)
}