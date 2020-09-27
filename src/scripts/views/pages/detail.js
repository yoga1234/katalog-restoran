const detailPage = (data) => {
  console.log(data)

  let restaurantCategories = ''
  let foodsMenu = ''
  let drinksMenu = ''
  for (const categories of data.restaurant.categories) {
    restaurantCategories += `<span>${categories.name}</span>`
  }
  for (const food of data.restaurant.menus.foods) {
    foodsMenu += `<span>${food.name}</span>`
  }
  for (const drink of data.restaurant.menus.drinks) {
    drinksMenu += `<span>${drink.name}</span>`
  }

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
          ${restaurantCategories}
        </div>
      </div>
      <div class="detail-menu">
        <h3 class="detail-menu-header">Menu Available</h3>
        <div class="detail-menu-list">
          <div class="detail-menu-foods">
            ${foodsMenu}
          </div>
          <div class="detail-menu-drinks">
            ${drinksMenu}
          </div>
        </div>
      </div>
      <div class="detal-rating">
        <h3 class="detail-rating-header">Rating</h3>
        <p class="detail-rating-text">${data.restaurant.rating} From 5 points</p>
      </div>
      <div class="detail-reviews">
        <h3 class="detail-reviews-header">Consumer Reviews Reviews</h3>
        <div class="detail-reviews-list">
          <div class="detail-reviews-item">
            <h4 class="detail-reviews-item-header">Consumer Name</h4>
            <p class="detail-reviews-item-text">The restaurant is superb!</p>
            <span class="detail-reviews-item-date">30 September 1995</span>
          </div>
          <div class="detail-reviews-item">
            <h4 class="detail-reviews-item-header">Consumer Name</h4>
            <p class="detail-reviews-item-text">The restaurant is superb!</p>
            <span class="detail-reviews-item-date">30 September 1995</span>
          </div>
          <div class="detail-reviews-item">
            <h4 class="detail-reviews-item-header">Consumer Name</h4>
            <p class="detail-reviews-item-text">The restaurant is superb!</p>
            <span class="detail-reviews-item-date">30 September 1995</span>
          </div>
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
