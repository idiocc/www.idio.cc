export default class {
  static get 'plain'() {
    return true
  }
  makeVideo(src) {
    const v = document.createElement('video')
    v.src = src
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
    this.img = this.el.querySelector('img')
  }
  render({ src }) {
    const vid = this.makeVideo(src)
    vid.style = this.img.style
    vid.style.position = 'absolute'
    vid.style.top = 0
    vid.style.left = 0
    vid.className = this.img.className
    this.el.appendChild(vid)
    this.el = null
    this.img = null
  }
}