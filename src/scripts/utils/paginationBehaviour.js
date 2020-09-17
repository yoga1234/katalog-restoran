const pageBehaviour = () => {
  const paginationPage = document.querySelectorAll('.pagination-page')

  for (let i = 0; i < paginationPage.length; i++) {
    paginationPage[i].addEventListener('click', function (e) {
      e.preventDefault()
      console.log('you are pressing' + paginationPage[i].innerHTML)
    })
  }
}

export default pageBehaviour
