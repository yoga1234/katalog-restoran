import CONFIG from '../../globals/config'

const favoritePage = (data) => {
  let favoriteReturn = ''

  if (data.length === 0) {
    favoriteReturn = '<h3 class="no-favorite-restaurant">No favorite restaurant saved.</h3>'
  }

  data.forEach(restaurant => {
    favoriteReturn += `
    <article class="card-article">
      <figure>
        <img class="article-image" src="${CONFIG.IMAGE_SMALL}${restaurant.pictureId}" alt="Kafe dengan nama ${restaurant.name}">
      </figure>
      <h3 class="article-title"><a href="#detail/${restaurant.id}" class="restaurant-detail">${restaurant.name}</a></h3>
      <p class="article-desc">${restaurant.description}</p>
      <div class="article-footer">
        <p class="article-footer-item-1">${restaurant.city}</p>
        <p class="article-footer-item-2">Rating: ${restaurant.rating}</p>
      </div>
    </article>
    `
  })

  return `
      <section id="main-content" class="article-container">
        <h2 class="section-header">Favorite Restaurant</h2>
        <div class="home-content">
          ${favoriteReturn}
        </div>
      </section>
    `
}
export default favoritePage
