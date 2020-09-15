import homePage from '../views/pages/home'
import favoritePage from '../views/pages/favorite'

import getListRestaurant from '../data/restaurant-data-source'

const urlParser = {
  loadPage (data) {
    const url = window.location.hash.slice(1).toLowerCase()
    switch (url) {
      case '':
        return this.HomePage(data)
      case 'home':
        return this.HomePage(data)
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

  HomePage (data) {
    return homePage(data)
  },

  FavoritePage () {
    return favoritePage()
  }
}

export default urlParser
