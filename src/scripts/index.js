import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'

import * as DATA from '../DATA.json'
import DATA_LOADER from './data_loader.js'
import urlParser from './routes/url-parser'

import skipToContent from './utils/skip-to-content-event'
import hamburgerMenuInitiator from './utils/hamburger-menu-initiator'

document.addEventListener('DOMContentLoaded', function () {
  const mainContent = document.getElementById('maincontent')
  const navigationWrapper = document.getElementById('navigation-wrapper')
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  const skipToContentElement = document.querySelector('.skip-to-content')
  const sectionHeader = document.querySelector('.section-header')

  // mainContainer.insertAdjacentHTML('beforeend', dataInsert)

  skipToContent({ skipToContentElement, sectionHeader })

  hamburgerMenuInitiator({ hamburgerMenu, navigationWrapper })

  window.addEventListener('hashchange', (e) => {
    if (window.location.hash !== '#maincontent') {
      mainContent.innerHTML = urlParser.getHashUrl()
    }
  })

  window.addEventListener('load', () => {
    if (window.location.hash === '#maincontent') {
      window.location.hash = '#home'
      return
    }
    mainContent.innerHTML = urlParser.getHashUrl()
  })
})
