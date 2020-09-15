import homePage from '../views/pages/home'
import favoritePage from '../views/pages/favorite'

import getListRestaurant from '../data/restaurant-data-source'

const urlParser = {
  getHashUrl () {
    const url = window.location.hash.slice(1).toLowerCase()
    switch (url) {
      case '':
        return this.renderHomePage()
      case 'home':
        return this.renderHomePage()
      case 'favorite':
        return this.renderFavoritePage()
      default:
        return this.renderHomePage()
    }
  },

  renderHomePage () {
    // const result = await getListRestaurant()
    return homePage()
  },

  renderFavoritePage () {
    return favoritePage()
  }
}

export default urlParser
