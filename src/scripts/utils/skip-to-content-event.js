const skipToContent = ({ skipToContentElement, sectionHeader }) => {
  skipToContentElement.addEventListener('keypress', function () {
    sectionHeader.focus()
  })
}

export default skipToContent
