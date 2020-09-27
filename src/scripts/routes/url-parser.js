import homePage from '../views/pages/home'
import favoritePage from '../views/pages/favorite'
import detailPage from '../views/pages/detail'

import { getListRestaurant, getDetailRestaurant } from '../data/restaurant-data-source'

const urlParser = {
  loadPage (pageInformation) {
    const url = window.location.href.split('/')[3].slice(1).toLowerCase()
    const idDetail = window.location.href.split('/')[4]
    switch (url) {
      case '':
        window.location.hash = 'home'
        break
      case 'home':
        return this.homePageRender(pageInformation)
      case 'favorite':
        return this.favoritePageRender()
      case 'detail':
        return this.detailPageRender(idDetail)
      default:
        return this.homePageRender()
    }
  },

  async renderHomeData () {
    const data = await getListRestaurant()
    return data
  },

  async renderDetailData (id) {
    const data = await getDetailRestaurant(id)
    return data
  },

  async homePageRender (pageInformation) {
    const homeData = await this.renderHomeData()
    return homePage(homeData, pageInformation)
  },

  favoritePageRender () {
    return favoritePage()
  },

  async detailPageRender (id) {
    const restaurantDetail = await this.renderDetailData(id)
    console.log('this is from url parser')
    return detailPage(restaurantDetail)
  }
}

export default urlParser
