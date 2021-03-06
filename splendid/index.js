/** @type {import('splendid').Config} */
const config = {
  layout: 'splendid/layout/main.html',
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Idio](https://www.idio.cc)',
    },
    {
      re: /([ (])(Idio|Webpack|Babel|Koa|React|Preact|Closure(?: Compiler)?)([.,' ])/g,
      replacement: '$1_$2_$3',
    },
    {
      re: /^(Idio|Webpack|Babel|Koa|React|Preact|Closure(?: Compiler)?)([.,' ])/mg,
      replacement: '_$1_$2',
    },
  ],
  pages: '../pages',
  elements: ['elements'],
  blocks: ['blocks'],
  // which prefixes to keep in the main CSS
  prefixes: ['-webkit-hyphens', '-ms-hyphens'],
  // for sitemap and social-buttons
  url: 'https://www.idio.cc',
  // required when pages are at org.github.io/pages-name
  /* mount: '/', */
  potracePath: '~/.splendid/potrace',
  links: {
    alibaba: 'https://artdeco.tech/alibaba',
    'art-deco-js': 'https://artdeco.tech/book',
    // 'art-deco-js': 'https://opencollective.com/nodetools/contribute/pre-order-art-deco-javascript-late-2020-13457',
  },
}

export default config