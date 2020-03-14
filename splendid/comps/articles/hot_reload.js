import __initOnThisPage from '../__init/on-this-page'
import __initSidebar from '../__init/sidebar'
import '../../../articles/hot_reload/index'
import __renameMap0 from '../__rename-maps/styles/sidebar'
import __renameMap1 from '../__rename-maps/styles/on-this-page'
import makeClassGetter from '../__mcg'
const renameMaps = { 'styles/sidebar.css': __renameMap0,
  'styles/on-this-page.css': __renameMap1 }
__initOnThisPage(),__initSidebar()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from '../__competent-lib'
import Animation from '../../components/animation.js'
import Ellipsis from '../../components/ellipsis.jsx'
import GifVideo from '../../components/gif-video.js'
import GithubBadge from '../../components/github-badge.jsx'
import Highlightjs from 'splendid/build/components/highlightjs'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'animation': Animation,
  'ellipsis': Ellipsis,
  'gif-video': GifVideo,
  'github-badge': GithubBadge,
  'highlightjs': Highlightjs,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'gif-video',
  id: 'c2ed2',
  props: {
    src: 'hot_reload/2-history/wysywyg/ar.mp4',
    webm: 'hot_reload/2-history/wysywyg/ar.webm',
  },
},
{
  key: 'gif-video',
  id: 'c5c99',
  props: {
    src: 'hot_reload/2-history/img/devtools.mp4',
    webm: 'hot_reload/2-history/img/devtools.webm',
  },
},
{
  key: 'github-badge',
  id: 'ce314',
  props: {
    owner: 'idiocc',
    name: 'idio',
  },
},
{
  key: 'ellipsis',
  id: 'c06ef,c06ef1',
},
{
  key: 'animation',
  id: 'c259c',
  props: {
    path: '../flash/animate/frontend.json',
    width: 623,
    height: 256,
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
  key: 'highlightjs',
  id: 'ccdbf,ccdbf1,ccdbf10,ccdbf11,ccdbf12,ccdbf13,ccdbf14,ccdbf15,ccdbf16,ccdbf17,ccdbf2,ccdbf3,ccdbf4,ccdbf5,ccdbf6,ccdbf7,ccdbf8,ccdbf9',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'animation',
  id: 'c4cb1',
  props: {
    path: '../flash/animate/proxies.json',
    width: 598,
    height: 233,
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
  id: 'c5130',
  props: {
    url: 'https://www.idio.cc/articles/pure-hot-reload.html',
    meta: true,
    className: 'SocialSharing b-xq b-Hk',
  },
},
{
  key: 'gif-video',
  id: 'cd409',
  props: {
    src: 'hot_reload/2-history/wysywyg/br.mp4',
    webm: 'hot_reload/2-history/wysywyg/br.webm',
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
