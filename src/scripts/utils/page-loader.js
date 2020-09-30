import urlParser from '../routes/url-parser'

import skipToContent from './skip-to-content-event'

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
  

  pageInformation = pageInformation || { activePage: 1, pageDestination: 1 }

  skipToContent()

  mainContent.innerHTML = await urlParser.loadPage('empty')
  mainContent.innerHTML = await urlParser.loadPage(pageInformation)
  paginationListener()
}

export default pageLoader
