const paginationSystem = (dataCount, activePage) => {
  const pageToShow = Math.floor(dataCount / 9)
  const remainderPageToShow = ((dataCount % 9) > 0) ? 1 : 0
  const totalPageToShow = (pageToShow + remainderPageToShow)
  let dataReturn = ''
  if ((activePage - 1) < totalPageToShow) {
    dataReturn += '<a href="#" class="pagination-page pagination-disabled"><i class="fa fa-angle-left pagination-arrow" aria-hidden="true"></i></a>'
  } else {
    dataReturn += '<a href="#" class="pagination-page"><i class="fa fa-angle-left pagination-arrow" aria-hidden="true"></i></a>'
  }
  for (let i = 1; i < totalPageToShow; i++) {
    if (i === activePage) {
      dataReturn += `
        <a href="#" class=" pagination-page home-active-page">${i}</a>
      `
    } else {
      dataReturn += `
        <a href="#" class="pagination-page">${i}</a>
      `
    }
  }
  if ((activePage + 1) > totalPageToShow) {
    dataReturn += '<a href="#" class="pagination-page pagination-disabled"><i class="fa fa-angle-right pagination-arrow" aria-hidden="true"></i></a>'
  } else {
    dataReturn += '<a href="#" class="pagination-page"><i class="fa fa-angle-right pagination-arrow" aria-hidden="true"></i></a>'
  }
  return dataReturn
}

export default paginationSystem
