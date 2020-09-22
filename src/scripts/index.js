import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'

import pageLoader from '../scripts/utils/page-loader'
import paginationListener from '../scripts/utils/pagination-listener'

window.addEventListener('DOMContentLoaded', async () => {
  if (window.location.hash === '#maincontent') {
    window.location.hash = '#home'
    return
  }

  console.log('page loader from DOMContentLoaded')
  await pageLoader()
})

window.addEventListener('hashchange', async (e) => {
  if (window.location.hash !== '#maincontent') {
    await pageLoader()
  }
})
