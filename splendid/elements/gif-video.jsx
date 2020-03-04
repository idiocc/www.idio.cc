import spawn from 'spawncommand'
import { dirname, relative } from 'path'
import ensurePath from '@wrote/ensure-path'
import { lstatSync } from 'fs'

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

  let { mtime: m, vidSrc, webm } = splendid.getCache('gif-vid', src)
  const mtime = await splendid.getLocaleMtime(path)
  if (m != mtime) {
    const doc = splendid.getDocPath(src)
    const vidPath = doc.replace(/.gif$/, '.mp4')
    const webmPath = vidPath.replace(/mp4$/, 'webm')
    await generate(path, vidPath)
    ;(webm = await generate(path, webmPath))


    vidSrc = relative(
      dirname(splendid.getDocPath(splendid.page.menuUrl)),
      vidPath,
    )
    const mp4s = lstatSync(vidPath).size
    splendid.log('mp4 size: %s', mp4s)

    webm = relative(
      dirname(splendid.getDocPath(splendid.page.menuUrl)),
      webmPath,
    )
    const msize = lstatSync(webmPath).size
    splendid.log('webm size: %s', msize)
    if (msize > mp4s) webm = undefined

    await splendid.appendCache('gif-vid', {
      [src]: { mtime, vidSrc, webm },
    })
  }
  splendid.export({
    src: vidSrc,
    webm,
  })
  return (<div style="position:relative;">
    <splendid-img placeholder-auto src={placeholder} {...props} />
  </div>)
}

const generate = async (path, vidPath) => {
  await ensurePath(vidPath)

  let promise
  if (vidPath.endsWith('mp4')) {
    ({ promise } = spawn('ffmpeg', [
      '-i', path, '-y',
      '-movflags', 'faststart', '-pix_fmt', 'yuv420p', '-vf',
      'scale=trunc(iw/2)*2:trunc(ih/2)*2', vidPath,
    ]))
  } else if (vidPath.endsWith('webm')) {
    ({ promise } = spawn('ffmpeg', [
      '-i', path, '-y', '-c:v',
      'libvpx', '-crf', '12', '-b:v', '500K',
      vidPath,
    ]))
  }
  // stdout.pipe(process.stdout)
  // stderr.pipe(process.stderr)
  const { code, stderr: e } = await promise
  if (code) {
    throw new Error(e)
  }
  return vidPath
}