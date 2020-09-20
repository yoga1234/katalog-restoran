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

  const pageInformation = {
    activePage: 1,
    pageDestination: 1,
  }

  skipToContent({ skipToContentElement, sectionHeader })

  hamburgerMenuInitiator({ hamburgerMenu, navigationWrapper })

  window.addEventListener('hashchange', async (e) => {
    if (window.location.hash !== '#maincontent') {
      mainContent.innerHTML = await urlParser.loadPage('empty')
      mainContent.innerHTML = await urlParser.loadPage(pageInformation)
    }

    const paginationPage = document.querySelectorAll('.pagination-page')
    pageInformation.activePage = document.querySelector('.active-page').innerHTML

    for (let i = 0; i < paginationPage.length; i++) {
      paginationPage[i].addEventListener('click', async function (e) {
        e.preventDefault()
        pageInformation.pageDestination = paginationPage[i].innerHTML
        console.log(pageInformation)
        mainContent.innerHTML = await urlParser.loadPage(pageInformation)
      })
    }
  })

  window.addEventListener('load', async () => {
    if (window.location.hash === '#maincontent') {
      window.location.hash = '#home'
      return
    }
    mainContent.innerHTML = await urlParser.loadPage('empty')
    mainContent.innerHTML = await urlParser.loadPage(pageInformation)

    const paginationPage = document.querySelectorAll('.pagination-page')
    pageInformation.activePage = document.querySelector('.active-page').innerHTML

    for (let i = 0; i < paginationPage.length; i++) {
      paginationPage[i].addEventListener('click', async function (e) {
        e.preventDefault()
        pageInformation.pageDestination = paginationPage[i].innerHTML
        console.log(pageInformation)
        mainContent.innerHTML = await urlParser.loadPage(pageInformation)
      })
    }
  })
})
