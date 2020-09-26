import homePage from '../views/pages/home'
import favoritePage from '../views/pages/favorite'
import detailPage from '../views/pages/detail'

import getListRestaurant from '../data/restaurant-data-source'

const urlParser = {
  loadPage (pageInformation) {
    const url = window.location.hash.slice(1).toLowerCase()
    switch (url) {
      case '':
        window.location.hash = 'home'
        break
      case 'home':
        return this.homePageRender(pageInformation)
      case 'favorite':
        return this.favoritePageRender()
      case 'detail':
        return this.detailPageRender()
      default:
        return this.homePage()
    }
  },

  async renderData () {
    const data = await getListRestaurant()
    return data
  },

  async homePageRender (pageInformation) {
    const homeData = await this.renderData()
    return homePage(homeData, pageInformation)
  },

  favoritePageRender () {
    return favoritePage()
  },

  detailPageRender () {
    return detailPage()
  }
}

export default urlParser
