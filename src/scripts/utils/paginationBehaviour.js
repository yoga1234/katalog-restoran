
const paginationBehaviour = () => {
  let pageDestination = ''

  const activePage = document.querySelector('.active-page') ? document.querySelector('.active-page') : 1
  const paginationPage = document.querySelectorAll('.pagination-page')
  const dataNumberItem = document.querySelectorAll('.card-article')
  const itemInPage = {
    lowestItem: 1,
    highestItem: 1
  }

  const dataReturn = {
    activePage,
    pageDestination,
    itemInPage
  }

  for (let i = 0; i < dataNumberItem.length; i++) {
    if (dataNumberItem[i].dataset.numberItem.split('/')[0] < itemInPage.min) {
      itemInPage.lowestItem = parseInt(dataNumberItem[i].dataset.numberItem.split('/')[0])
    }

    if (dataNumberItem[i].dataset.numberItem.split('/')[0] > itemInPage.highestItem) {
      itemInPage.highestItem = parseInt(dataNumberItem[i].dataset.numberItem.split('/')[0])
    }
  }

  for (let i = 0; i < paginationPage.length; i++) {
    paginationPage[i].addEventListener('click', function (e) {
      e.preventDefault()
      pageDestination = paginationPage[i].innerHTML
    })
  }
  console.log(dataReturn)
  return dataReturn
}

export default paginationBehaviour
