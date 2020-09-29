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
  jumbotronRemover()
  if (window.location.hash === '#maincontent') {
    window.location.hash = '#home'
    return
  }

  await pageLoader()

  const formSubmit = document.getElementById('detail-review-form-submit')
  formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submit has been clicked')
  })
})

window.addEventListener('hashchange', async (e) => {
  jumbotronRemover()
  if (window.location.hash !== '#maincontent') {
    await pageLoader()
  }
})
