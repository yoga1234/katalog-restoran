const jumbotronRemover = () => {
  console.log(window.location.hash)
  const jumbotronElement = document.querySelector('.jumbotron')
  if (window.location.hash === '#home') {
    jumbotronElement.style.display = 'block'
  } else {
    jumbotronElement.style.display = 'none'
  }
}

export default jumbotronRemover
