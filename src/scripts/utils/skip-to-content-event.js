const skipToContent = () => {
  const skipToContentElement = document.querySelector('.skip-to-content')
  const sectionHeader = document.querySelector('.section-header')

  skipToContentElement.addEventListener('keypress', function () {
    sectionHeader.focus()
  })
}

export default skipToContent
