/* eslint-env browser */
/**
 * @type {!Array<!HTMLButtonElement>}
 */
const items = [...document.querySelectorAll('.UDB')]
items.forEach((btn) => {
  btn.onclick = () => {
    btn.style.display = 'none'
    const span = btn.nextElementSibling
    span.style.display = ''
  }
})