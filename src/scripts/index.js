import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'

import pageLoader from '../scripts/utils/page-loader'

const jumbotronRemover = () => {
  const jumbotronElement = document.querySelector('.jumbotron')
  if (window.location.hash === '#favorite') {
    jumbotronElement.style.display = 'none'
  } else {
    jumbotronElement.style.display = 'block'
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  jumbotronRemover()
  if (window.location.hash === '#maincontent') {
    window.location.hash = '#home'
    return
  }

  console.log('page loader from DOMContentLoaded')
  await pageLoader()
})

window.addEventListener('hashchange', async (e) => {
  jumbotronRemover()
  if (window.location.hash !== '#maincontent') {
    await pageLoader()
  }
})
