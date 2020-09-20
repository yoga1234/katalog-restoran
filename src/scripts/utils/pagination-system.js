const paginationSystem = (dataCount, activePage) => {
  console.log(activePage)
  const pageToShow = Math.floor(dataCount / 9)
  const remainderPageToShow = ((dataCount % 9) > 0) ? 1 : 0
  const totalPageToShow = (pageToShow + remainderPageToShow)
  let dataReturn = ''
  for (let i = 1; i <= totalPageToShow; i++) {
    if (i === parseInt(activePage)) {
      dataReturn += `
        <a href="#" class=" pagination-page active-page">${i}</a>
      `
    } else {
      dataReturn += `
        <a href="#" class="pagination-page">${i}</a>
      `
    }
  }
  return dataReturn
}

export default paginationSystem
