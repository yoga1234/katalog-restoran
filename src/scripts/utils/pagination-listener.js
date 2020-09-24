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
      console.log(pageInformation)
    })
  }
}

export default paginationListener
