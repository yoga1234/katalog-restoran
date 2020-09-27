import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/detail.css'
import '../styles/responsive.css'

import pageLoader from '../scripts/utils/page-loader'

const jumbotronRemover = () => {
  const jumbotronElement = document.querySelector('.jumbotron')
  if (window.location.hash === '#home') {
    jumbotronElement.style.display = 'block'
  } else {
    jumbotronElement.style.display = 'none'
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  console.log('this is from DOMContentLoader')
  jumbotronRemover()
  if (window.location.hash === '#maincontent') {
    window.location.hash = '#home'
    return
  }

  await pageLoader()
})

window.addEventListener('hashchange', async (e) => {
  console.log('this is from hashchange')
  jumbotronRemover()
  if (window.location.hash !== '#maincontent') {
    await pageLoader()
  }
})
