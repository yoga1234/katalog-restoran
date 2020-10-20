import { checkFavorite } from '../src/scripts/utils/favorite-restaurant-initiator'

describe('liking a restaurant', () => {
  it('should show the like button when the restaurant has not been liked before', async () => {
    const restaurantId = 1
    document.body.innerHTML = '<div class="add-to-favorite"></div>'

    document.querySelector('.add-to-favorite').innerHTML = await checkFavorite(restaurantId)

    expect(document.querySelector('.add-to-favorite-text')).toBeTruthy()
  })

  it('should not show the unlike button when the restaurant has not been liked', async () => {
    const restaurantId = 1
    document.body.innerHTML = '<div class="add-to-favorite"></div>'

    document.querySelector('.add-to-favorite').innerHTML = await checkFavorite(restaurantId)

    expect(document.querySelector('.is-on-favorite')).toBeFalsy()
  })
})
