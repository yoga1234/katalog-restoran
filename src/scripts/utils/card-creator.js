import CONFIG from '../globals/config'

const cardCreator = (data) => {
  let restaurantReturn = ''

  restaurantReturn += '<div class="home-content">'

  for (const restaurant of data) {
    restaurantReturn += `
      <article class="card-article">
        <figure>
          <img class="article-image" src="${CONFIG.IMAGE_SMALL + restaurant.pictureId}" alt="Kafe dengan nama ${restaurant.name}" crossorigin="anonymous">
        </figure>
        <h3 class="article-title"><a href="/#detail/${restaurant.id}" class="restaurant-detail">${restaurant.name}</a></h3>
        <p class="article-desc">${restaurant.description}</p>
        <div class="article-footer">
          <p class="article-footer-item-1">${restaurant.city}</p>
          <p class="article-footer-item-2">Rating: ${restaurant.rating}/5</p>
        </div>
      </article>`
  }

  restaurantReturn += '</div>'

  return restaurantReturn
}

export default cardCreator
