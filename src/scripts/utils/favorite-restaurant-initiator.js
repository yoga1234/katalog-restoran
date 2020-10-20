import { getDetailRestaurant } from '../data/restaurant-data-source'
import favoriteRestaurantDB from '../data/favorite-restaurant'

const changeFavoriteText = async (button, id) => {
  console.log(button)
  const dataRestaurant = await favoriteRestaurantDB.getRestaurant(id)
  if (dataRestaurant === undefined) {
    button.classList.add('add-to-favorite-text')
    button.classList.remove('is-on-favorite')
    button.innerHTML = 'Add To Favorite'
  } else {
    button.classList.remove('add-to-favorite-text')
    button.classList.add('is-on-favorite')
    button.innerHTML = 'Remove from favorite'
  }
}

const addToFavorite = () => {
  const favoriteRestaurantButton = document.getElementById('add-to-favorite')
  const idDetail = window.location.href.split('/')[4]

  favoriteRestaurantButton.addEventListener('click', async () => {
    // cek apakah textnya add atau remove
    if (favoriteRestaurantButton.innerHTML.toLowerCase() === 'add to favorite') {
      const data = await getDetailRestaurant(idDetail)
      favoriteRestaurantDB.putRestaurant(data.restaurant)
      alert('Success adding restaurant to favorite')
      changeFavoriteText(favoriteRestaurantButton, idDetail)
    } else if (favoriteRestaurantButton.innerHTML.toLowerCase() === 'remove from favorite') {
      favoriteRestaurantDB.deleteRestaurant(idDetail)
      alert('Restaurant has been removed from favorite')
      changeFavoriteText(favoriteRestaurantButton, idDetail)
    }
  })
}

const checkFavorite = async (idDetail) => {
  let addToFavoriteButton = ''

  const dataRestaurant = await favoriteRestaurantDB.getRestaurant(idDetail)
  if (dataRestaurant === undefined) {
    addToFavoriteButton = '<button id="add-to-favorite" class="add-to-favorite-text">Add To Favorite</button>'
  } else {
    addToFavoriteButton = '<button id="add-to-favorite" class="is-on-favorite">Remove from favorite</button>'
  }

  return addToFavoriteButton
}

const getAllRestaurantData = () => {
  console.log('this is get all restaurant function')
}

export { addToFavorite, checkFavorite, getAllRestaurantData, changeFavoriteText }
