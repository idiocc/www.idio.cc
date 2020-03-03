import { relative, dirname } from 'path'

/**
 * @param {Object} props
 * @param {Splendid} props.splendid
 * @param {string} props.path The path to the JSON.
 * @param {string} props.src The placeholder image.
 */
export default async function Animation({ splendid, style, path, src, alt, class: cl,
  dev, width, height, align, span }) {
  if (!path.endsWith('.json'))
    throw splendid.newError('Expected path to end with .json')
  const Path = splendid.resolveRelative(path)
  await splendid.addFile(Path)

  if (!dev) {
    // svg-anim
    splendid.preload('node_modules://@artdeco/snapsvg-animator/svg-anim.min.js')
    await splendid.addFile('node_modules://@artdeco/snapsvg-animator/svg-anim.min.js.map')
    // snap min
    splendid.preload('node_modules://snapsvg/dist/snap.svg-min.js')
    splendid.extern('node_modules://@artdeco/snapsvg-animator/types/externs.js')
  } else {
    // svg-anim
    splendid.addScript('js/svg-anim-src.js', true, {}, true)
    // snap
    splendid.preload('node_modules://snapsvg/dist/snap.svg.js')
  }

  const p = relative(
    dirname(splendid.getDocPath(splendid.page.url)),
    splendid.getDocPath(`/${Path}`)
  ) // OK voodle
  splendid.export({
    path: p,
    width, height, align, dev,
  })
  const c = cl ? `position-relative ${cl}` : 'position-relative'
  const img = (<splendid-img img-fluid placeholder-auto alt={alt} src={src} />)
  if (span) return (<span style={style} className={c}>{img}</span>)
  return (<div style={style} className={c}>{img}</div>)
}
