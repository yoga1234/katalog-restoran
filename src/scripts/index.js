import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'

import urlParser from './routes/url-parser'

import skipToContent from './utils/skip-to-content-event'
import hamburgerMenuInitiator from './utils/hamburger-menu-initiator'

document.addEventListener('DOMContentLoaded', function () {
  const mainContent = document.getElementById('maincontent')
  const navigationWrapper = document.getElementById('navigation-wrapper')
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  const skipToContentElement = document.querySelector('.skip-to-content')
  const sectionHeader = document.querySelector('.section-header')

  skipToContent({ skipToContentElement, sectionHeader })

  hamburgerMenuInitiator({ hamburgerMenu, navigationWrapper })

  window.addEventListener('hashchange', async (e) => {
    const activePage = document.querySelector('.active-page') ? document.querySelector('.active-page') : 1
    console.log(activePage)
    if (window.location.hash !== '#maincontent') {
      mainContent.innerHTML = await urlParser.loadPage()
    }
  })

  window.addEventListener('load', async () => {
    const activePage = document.querySelector('.active-page') ? document.querySelector('.active-page') : 1

    if (window.location.hash === '#maincontent') {
      window.location.hash = '#home'
      return
    }

    mainContent.innerHTML = await urlParser.loadPage(activePage)
  })
})
