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
    if (window.location.hash !== '#maincontent') {
      mainContent.innerHTML = urlParser.loadPage()

      const dataDOM = await urlParser.renderData()
      console.log(dataDOM)
      mainContent.innerHTML = urlParser.loadPage(dataDOM)
    }
  })

  window.addEventListener('load', async () => {
    const homeActivePage = document.querySelector('.home-active-page') ? document.querySelector('.home-active-page') : 1
    console.log('index', homeActivePage)
    if (window.location.hash === '#maincontent') {
      window.location.hash = '#home'
      return
    }

    mainContent.innerHTML = urlParser.loadPage('empty', homeActivePage)

    const dataDOM = await urlParser.renderData()
    mainContent.innerHTML = urlParser.loadPage(dataDOM, homeActivePage)
  })
})
