import { getDetailRestaurant } from '../data/restaurant-data-source'
import favoriteRestaurantDB from '../data/favorite-restaurant'

const addToFavorite = () => {
  const favoriteRestaurantButton = document.getElementById('add-to-favorite')
  const idDetail = window.location.href.split('/')[4]

  favoriteRestaurantButton.addEventListener('click', async () => {
    const data = await getDetailRestaurant(idDetail)
    favoriteRestaurantDB.putRestaurant(data.restaurant)
    console.log('anda click add to favorite button')
  })
}

export default addToFavorite
