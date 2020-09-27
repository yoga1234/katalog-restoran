import { restaurantCategories, foodsMenu, drinksMenu } from '../../utils/restaurant-detail'

const detailPage = (data) => {
  console.log(data)

  const categories = restaurantCategories(data.restaurant.categories)
  const foods = foodsMenu(data.restaurant.menus.foods)
  const drinks = drinksMenu(data.restaurant.menus.drinks)

  return `
    <section class="detail-container">
      <button class="detail-back-button"> <span class="detail-back-left-arrow">&lt;</span> Back</button>
      <h2 class="detail-restaurant-name">${data.restaurant.name}</h2>
      <div class="detail-restaurant-image"></div>
      <div class="detail-description">
        <h3 class="detail-description-header">Description</h3>
        <p class="detail-description-text">${data.restaurant.description}</p>
      </div>
      <div class="detail-city">
        <h3 class="detail-city-header">City</h3>
        <p class="detail-city-text">${data.restaurant.city}</p>
      </div>
      <div class="detail-address">
        <h3 class="detail-address-header">Address</h3>
        <p class="detail-address-text">${data.restaurant.address}</p>
      </div>
      <div class="detail-categories">
        <h3 class="detail-categories-header">Categories</h3>
        <div class="detail-categories-list">
          ${categories}
        </div>
      </div>
      <div class="detail-menu">
        <h3 class="detail-menu-header">Menu Available</h3>
        <div class="detail-menu-list">
          <div class="detail-menu-foods">
            ${foods}
          </div>
          <div class="detail-menu-drinks">
            ${drinks}
          </div>
        </div>
      </div>
      <div class="detal-rating">
        <h3 class="detail-rating-header">Rating</h3>
        <p class="detail-rating-text">${data.restaurant.rating} From 5 points</p>
      </div>
      <div class="detail-reviews">
        <h3 class="detail-reviews-header">Consumer Reviews</h3>
        <div class="detail-reviews-list">
          <div class="detail-reviews-item">
            <h4 class="detail-reviews-item-header">Consumer Name</h4>
            <p class="detail-reviews-item-text">The restaurant is superb!</p>
            <span class="detail-reviews-item-date">30 September 1995</span>
          </div>
        </div>
      </div>
    </section>
  `
}

export default detailPage
