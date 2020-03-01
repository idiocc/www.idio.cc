export default () => {
  /* eslint-env browser */
  // const findAllLis = (li) => {
  //   const all = []
  //   while(li.parentElement && li.parentElement.parentElement && li.parentElement.parentElement.getAttribute('data-heading')) {
  //     li = li.parentElement.parentElement
  //     all.push(li)
  //   }
  //   return all
  // }
  const ents = [...document.querySelectorAll('div[data-section]')]

  if (ents.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        const section = target.id

        if (isIntersecting) {
          const li = document.querySelector(`[data-heading="${section}"]`)
          li.classList.add('Active')
        } else {
          const li = document.querySelector(`[data-heading="${section}"]`)
          li.classList.remove('Active')
        }
      })
    }, {  }) // rootMargin: `${-window.innerHeight + 1}px`

    ents.forEach((el) => {
      io.observe(el)
    })
  }
}