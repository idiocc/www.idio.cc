/**
 * @type {HTMLButtonElement}
 */
const dev = window['developer']
dev.onclick = () => {
  dev.parentElement.innerText = 'The internet is made by people like you.'
}

/**
 * @type {HTMLButtonElement}
 */
const us = window['user']
us.onclick = () => {
  us.parentElement.innerText = 'You give developers something to do!'
}