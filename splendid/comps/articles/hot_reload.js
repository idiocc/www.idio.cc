import __initOnThisPage from '../__init/on-this-page'
import __initSidebar from '../__init/sidebar'
import __renameMap0 from '../__rename-maps/styles/sidebar'
import __renameMap1 from '../__rename-maps/styles/on-this-page'
import makeClassGetter from '../__mcg'
const renameMaps = { 'styles/sidebar.css': __renameMap0,
  'styles/on-this-page.css': __renameMap1 }
__initOnThisPage(),__initSidebar()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from '../__competent-lib'
import GifVideo from '../../components/gif-video.js'
import GithubBadge from '../../components/github-badge.jsx'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'gif-video': GifVideo,
  'github-badge': GithubBadge,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'github-badge',
  id: 'ce314',
  props: {
    owner: 'idiocc',
    name: 'idio',
  },
},
{
  key: 'gif-video',
  id: 'c3492',
  props: {
    src: 'hot_reload/img/dan.mp4',
  },
},
{
  key: 'github-badge',
  id: 'ce149',
  props: {
    owner: 'idiocc',
    name: 'www.idio.cc',
  },
},
{
  key: 'social-buttons',
  id: 'c28db',
  props: {
    url: 'https://www.idio.cc/articles/pure-hot-reload.html',
    meta: true,
    className: 'b-xq b-Hk',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const Comp = __components[key]
  const plain = Comp.plain || (/^\s*class\s+/.test(Comp.toString()) && !Component.isPrototypeOf(Comp))
  props.splendid = { mount: '/', addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }

  const ids = id.split(',')
  ids.forEach((Id) => {
    const { parent, el } = init(Id, key)
    if (!el) return
    const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id: Id, plain })
    let comp
    el.render = () => {
      comp = start(renderMeta, Comp, comp, el, parent, props, children, { render, Component, h })
      return comp
    }
    el.render.meta = renderMeta
    io.observe(el)
  })
})
