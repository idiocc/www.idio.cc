export default class {
  static get 'plain'() {
    return true
  }
  makeVideo(mp4, webm) {
    const v = document.createElement('video')
    const sources = [`<source src="${mp4}" type="video/mp4">`]
    if (webm) sources.unshift(`<source src="${webm}" type="video/webm">`)
    const s = sources.join('\n')
    v.innerHTML = s
    v.loop = true
    v.autoplay = true
    v.playsinline = true
    v.muted = true
    return v
  }
  /**
   * @param {HTMLImageElement} el
   */
  constructor(el) {
    this.el = el
  }
  render({ src, webm }) {
    const img = this.el.querySelector('img')
    const picture = this.el.querySelector('picture')
    const vid = this.makeVideo(src, webm)
    vid.style = img.style
    vid.style.position = 'absolute'
    vid.style.top = 0
    vid.style.left = 0
    vid.className = img.className + ` ${picture.className}`
    this.el.appendChild(vid)
    this.el = null
    this.img = null
  }
}