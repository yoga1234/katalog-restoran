const jumbotronRemover = () => {
  const jumbotronElement = document.querySelector('.jumbotron')
  if (window.location.hash === '#home' || window.location.hash === '') {
    jumbotronElement.style.display = 'block'
  } else {
    jumbotronElement.style.display = 'none'
  }
}

export default jumbotronRemover
