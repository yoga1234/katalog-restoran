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

const checkFavorite = async () => {
  const idDetail = window.location.href.split('/')[4]
  let addToFavoriteButton = ''

  const dataRestaurant = await favoriteRestaurantDB.getRestaurant(idDetail)
  if (dataRestaurant === undefined) {
    addToFavoriteButton = '<button id="add-to-favorite" class="add-to-favorite-text">Add To Favorite</button>'
  } else {
    addToFavoriteButton = '<button id="add-to-favorite" class="is-on-favorite">Restaurant is on favorite</button>'
  }

  return addToFavoriteButton
}

export { addToFavorite, checkFavorite }
