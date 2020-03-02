import spawn from 'spawncommand'
import { dirname, relative } from 'path'

/**
 * @type {import('splendid').Element}
 */
export default async function GifVideo({
  splendid, src, placeholder, ...props
}) {
  if (!src.endsWith('.gif')) throw new Error('The source is not a gif.')
  src = splendid.resolveRelative(src)
  const path = splendid.getPath(src)

  if (!placeholder) throw new Error('Please pass a placeholder.')

  let vidSrc
  const { mtime: m, vidSrc: v } = splendid.getCache('git-vid', src)
  const mtime = await splendid.getLocaleMtime(path)
  if (m == mtime) {
    vidSrc = v
  } else {
    const doc = splendid.getDocPath(src)
    const vidPath = doc.replace(/.gif$/, '.mp4')

    const { promise } = spawn('ffmpeg', [
      '-i', path, '-y',
      '-movflags', 'faststart', '-pix_fmt', 'yuv420p', '-vf',
      'scale=trunc(iw/2)*2:trunc(ih/2)*2', vidPath,
    ])
    // stdout.pipe(process.stdout)
    // stderr.pipe(process.stderr)
    const { code, stderr: e } = await promise
    if (code) {
      throw new Error(e)
    }

    vidSrc = relative(
      dirname(splendid.getDocPath(splendid.page.menuUrl)),
      vidPath,
    )
    await splendid.appendCache('gif-vid', {
      [src]: { mtime, vidSrc },
    })
  }
  splendid.export({
    src: vidSrc,
  })
  return (<div style="position:relative;">
    <splendid-img placeholder-auto src={placeholder} {...props} />
  </div>)
}