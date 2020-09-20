import homePage from '../views/pages/home'
import favoritePage from '../views/pages/favorite'

import getListRestaurant from '../data/restaurant-data-source'

const urlParser = {
  loadPage (pageInformation) {
    console.log(pageInformation)
    if (pageInformation !== 'empty') {
      pageInformation = {
        activePage: pageInformation.activePage ? pageInformation.activePage : 'none',
        pageDestination: pageInformation.pageDestination ? pageInformation.pageDestination : 'none',
        itemInPage: pageInformation.itemInPage ? pageInformation.itemInPage : { lowestItem: 1, highestItem: 1 }
      }
    }
    console.log(pageInformation)
    const url = window.location.hash.slice(1).toLowerCase()
    switch (url) {
      case '':
        window.location.hash = 'home'
        break
      case 'home':
        return this.HomePage(pageInformation)
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

  async HomePage (pageInformation) {
    const homeData = await this.renderData()
    return homePage(homeData, pageInformation)
  },

  FavoritePage () {
    return favoritePage()
  }
}

export default urlParser
