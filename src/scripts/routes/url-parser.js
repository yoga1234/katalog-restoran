import homePage from '../views/pages/home'
import favoritePage from '../views/pages/favorite'

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
    return homePage()
  },

  renderFavoritePage () {
    return favoritePage()
  }
}

export default urlParser
