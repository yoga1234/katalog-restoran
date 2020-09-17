import homePage from '../views/pages/home'
import favoritePage from '../views/pages/favorite'

import getListRestaurant from '../data/restaurant-data-source'

const urlParser = {
  loadPage (activePage) {
    const url = window.location.hash.slice(1).toLowerCase()
    switch (url) {
      case '':
        window.location.hash = 'home'
        break
      case 'home':
        return this.HomePage(activePage)
      case 'favorite':
        return this.FavoritePage()
      default:
        return this.HomePage()
    }
  },

  async renderData () {
    const data = await getListRestaurant()
    return data
  },

  async HomePage (activePage) {
    const homeData = await this.renderData()
    return homePage(homeData, activePage)
  },

  FavoritePage () {
    return favoritePage()
  }
}

export default urlParser
