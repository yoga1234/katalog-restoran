const backToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

const backToTopBehaviour = () => {
  const backToTopButton = document.querySelector('.back-to-top-text')

  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block'
    } else {
      backToTopButton.style.display = 'none'
    }
  }

  backToTopButton.addEventListener('click', backToTop)
}

export { backToTop, backToTopBehaviour }
