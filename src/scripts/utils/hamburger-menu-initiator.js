const hamburgerMenuInitiator = () => {
  const navigationWrapper = document.getElementById('navigation-wrapper')
  const hamburgerMenu = document.querySelector('.hamburger-menu')

  hamburgerMenu.addEventListener('click', () => {
    navigationWrapper.classList.toggle('open')
  })

  document.addEventListener('click', (e) => {
    if (String(e.target.classList) !== 'hamburger-menu') {
      if (navigationWrapper.classList.contains('open')) {
        navigationWrapper.classList.remove('open')
      }
    }
    if (e.target.classList.contains('link-item-href')) {
      e.target.blur()
    }
  })
}

export default hamburgerMenuInitiator
