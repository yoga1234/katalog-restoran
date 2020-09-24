import urlParser from '../routes/url-parser'

import skipToContent from './skip-to-content-event'
import hamburgerMenuInitiator from './hamburger-menu-initiator'

const paginationListener = () => {
  const pageInformation = {
    activePage: 1,
    pageDestination: 1
  }
  const paginationPage = document.querySelectorAll('.pagination-page')

  for (let i = 0; i < paginationPage.length; i++) {
    paginationPage[i].addEventListener('click', async function (e) {
      e.preventDefault()
      pageInformation.pageDestination = parseInt(paginationPage[i].innerHTML)
      pageInformation.activePage = parseInt(document.querySelector('.active-page').innerHTML)
      pageLoader(pageInformation)
    })
  }
}

const pageLoader = async (pageInformation) => {
  const mainContent = document.getElementById('maincontent')
  const navigationWrapper = document.getElementById('navigation-wrapper')
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  const skipToContentElement = document.querySelector('.skip-to-content')
  const sectionHeader = document.querySelector('.section-header')

  pageInformation = pageInformation || { activePage: 1, pageDestination: 1 }

  skipToContent({ skipToContentElement, sectionHeader })

  hamburgerMenuInitiator({ hamburgerMenu, navigationWrapper })

  mainContent.innerHTML = await urlParser.loadPage('empty')
  mainContent.innerHTML = await urlParser.loadPage(pageInformation)
  paginationListener()
}

export default pageLoader
