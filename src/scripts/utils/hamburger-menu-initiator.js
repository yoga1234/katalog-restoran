const hamburgerMenuInitiator = ({ hamburgerMenu, navigationWrapper }) => {
  hamburgerMenu.addEventListener('click', function () {
    navigationWrapper.classList.toggle('open')
  })

  document.addEventListener('click', function (e) {
    if (String(e.target.classList) !== 'hamburger-menu') {
      if (navigationWrapper.classList.contains('open')) {
        navigationWrapper.classList.remove('open')
      }
    }
  })
}

export default hamburgerMenuInitiator
