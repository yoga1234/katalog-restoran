const hamburgerMenuInitiator = () => {
  const navigationWrapper = document.getElementById('navigation-wrapper')
  const hamburgerMenu = document.querySelector('.hamburger-menu')

  hamburgerMenu.addEventListener('click', function () {
    navigationWrapper.classList.toggle('open')
    console.log('this is from hamburger menu')
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
