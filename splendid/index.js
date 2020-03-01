/** @type {import('splendid').Config} */
const config = {
  layout: 'splendid/layout/main.html',
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Idio](https://idio.cc)',
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
}

export default config