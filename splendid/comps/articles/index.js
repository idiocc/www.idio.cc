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
import Ellipsis from '../../components/ellipsis.jsx'
import GithubBadge from '../../components/github-badge.jsx'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'ellipsis': Ellipsis,
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
  key: 'ellipsis',
  id: 'ceb55',
  props: {
    timeout: 300,
  },
  children: ["\n  Please bear one moment while I add the content\n"],
},
{
  key: 'social-buttons',
  id: 'cffb5',
  props: {
    url: 'https://www.idio.cc/articles/',
    meta: true,
    className: 'SocialSharing b-xq b-Hk',
  },
},
{
  key: 'github-badge',
  id: 'ce149',
  props: {
    owner: 'idiocc',
    name: 'www.idio.cc',
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
