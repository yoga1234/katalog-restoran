const descriptionShorter = (data) => {
  let descriptionReturn = ''

  if (data.length > 150) {
    descriptionReturn = data.substring(0, 120) + '...'
  }
  return descriptionReturn
}

export default descriptionShorter
