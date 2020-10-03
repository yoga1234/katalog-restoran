import homePage from '../views/pages/home'
import favoritePage from '../views/pages/favorite'
import detailPage from '../views/pages/detail'

import { backToTop } from '../utils/scroll-top'

import { getListRestaurant, getDetailRestaurant, addNewReview } from '../data/restaurant-data-source'
import favoriteRestaurantDB from '../data/favorite-restaurant'

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
        backToTop()
        return this.renderDetailData(idDetail)
      default:
        return this.homePageRender()
    }
  },

  async renderHomeData () {
    const data = await getListRestaurant()
    return data
  },

  async insertReviewData (data) {
    data = {
      id: window.location.href.split('/')[4],
      ...data
    }
    const insertData = await addNewReview(data)
    return insertData
  },

  async renderDetailData (id) {
    const data = await getDetailRestaurant(id)
    return detailPage(data)
  },

  async homePageRender (pageInformation) {
    const homeData = await this.renderHomeData()
    return homePage(homeData, pageInformation)
  },

  async favoritePageRender () {
    const favoriteData = await favoriteRestaurantDB.getAllRestaurant()
    return favoritePage(favoriteData)
  }

}

export default urlParser
