import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/detail.css'
import '../styles/responsive.css'

import pageLoader from '../scripts/utils/page-loader'
import detailAddReviewEvent from '../scripts/utils/detail-add-review-event'
import jumbotronRemover from '../scripts/utils/jumbotron-remover'

window.addEventListener('DOMContentLoaded', async () => {
  jumbotronRemover()
  if (window.location.hash === '#maincontent') {
    window.location.hash = '#home'
    return
  }

  await pageLoader()

  detailAddReviewEvent()
})

window.addEventListener('hashchange', async (e) => {
  jumbotronRemover()
  if (window.location.hash !== '#maincontent') {
    await pageLoader()
  }
  detailAddReviewEvent()
})
