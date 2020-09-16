const paginationSystem = (totalItems) => {
  let dataReturn = ''
  for (let i = 1; i < totalItems; i++) {
    dataReturn += `
    <a href="#">${i}</a>
    `
  }
  return dataReturn
}

export default paginationSystem
