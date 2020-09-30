const hamburgerMenuInitiator = () => {
  const navigationWrapper = document.getElementById('navigation-wrapper')
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  const navigationLink = document.querySelectorAll('.link-item-href')

  hamburgerMenu.addEventListener('click', () => {
    navigationWrapper.classList.toggle('open')
    console.log('this is from hamburger menu')
  })

  document.addEventListener('click', (e) => {
    if (String(e.target.classList) !== 'hamburger-menu') {
      if (navigationWrapper.classList.contains('open')) {
        navigationWrapper.classList.remove('open')
      }
    }
  })

  // for (let i = 0; i < navigationLink.length; i++) {
  //   navigationLink[i].addEventListener('click', () => {
  //     navigationWrapper.classList.toggle('open')
  //   })
  // }
}

export default hamburgerMenuInitiator
