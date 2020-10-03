import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/detail.css'
import '../styles/responsive.css'

import pageLoader from '../scripts/utils/page-loader'
import detailAddReviewEvent from '../scripts/utils/detail-add-review-event'
import jumbotronRemover from '../scripts/utils/jumbotron-remover'
import { backToTopBehaviour } from '../scripts/utils/scroll-top'
import hamburgerMenuInitiator from '../scripts/utils/hamburger-menu-initiator'
import { addToFavorite, checkFavorite } from '../scripts/utils/favorite-restaurant-initiator'

window.addEventListener('DOMContentLoaded', async () => {
  hamburgerMenuInitiator()
  jumbotronRemover()
  if (window.location.hash === '#maincontent') {
    window.location.hash = '#home'
    return
  }

  await pageLoader()

  detailAddReviewEvent()
  if (window.location.hash !== '#home' && window.location.hash !== '#favorite') {
    backToTopBehaviour()
    addToFavorite()
    checkFavorite()
  }
})

window.addEventListener('hashchange', async (e) => {
  jumbotronRemover()
  if (window.location.hash !== '#maincontent') {
    await pageLoader()
  }
  detailAddReviewEvent()
  if (window.location.hash !== '#home' && window.location.hash !== '#favorite') {
    backToTopBehaviour()
    addToFavorite()
    checkFavorite()
  }
})
