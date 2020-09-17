import homePage from '../views/pages/home'
import favoritePage from '../views/pages/favorite'

import getListRestaurant from '../data/restaurant-data-source'

const urlParser = {
  loadPage (data, activePage) {
    const url = window.location.hash.slice(1).toLowerCase()
    switch (url) {
      case '':
        window.location.hash = 'home'
        break
      case 'home':
        return this.HomePage(data, activePage)
      case 'favorite':
        return this.FavoritePage()
      default:
        return this.HomePage(data)
    }
  },

  async renderData () {
    const data = getListRestaurant()
    return data
  },

  HomePage (data, activePage) {
    return homePage(data, activePage)
  },

  FavoritePage () {
    return favoritePage()
  }
}

export default urlParser
