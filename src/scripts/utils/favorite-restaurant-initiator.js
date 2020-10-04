import { getDetailRestaurant } from '../data/restaurant-data-source'
import favoriteRestaurantDB from '../data/favorite-restaurant'

const changeFavoriteText = async (button, id) => {
  const dataRestaurant = await favoriteRestaurantDB.getRestaurant(id)
  if (dataRestaurant === undefined) {
    button.classList.add('add-to-favorite-text')
    button.classList.remove('is-on-favorite')
    button.innerHTML = 'Add To Favorite'
  } else {
    button.classList.remove('add-to-favorite-text')
    button.classList.add('is-on-favorite')
    button.innerHTML = 'Restaurant is on favorite'
  }
}

const addToFavorite = () => {
  const favoriteRestaurantButton = document.getElementById('add-to-favorite')
  const idDetail = window.location.href.split('/')[4]

  favoriteRestaurantButton.addEventListener('click', async () => {
    const data = await getDetailRestaurant(idDetail)
    favoriteRestaurantDB.putRestaurant(data.restaurant)
    changeFavoriteText(favoriteRestaurantButton, idDetail)
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

const getAllRestaurantData = () => {
  console.log('this is get all restaurant function')
}

export { addToFavorite, checkFavorite, getAllRestaurantData }
