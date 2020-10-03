const restaurantCategories = (data) => {
  let categories = ''
  for (const categorie of data) {
    categories += `<span>${categorie.name}</span>`
  }
  return categories
}

const foodsMenu = (data) => {
  let foods = ''
  for (const food of data) {
    foods += `<span>${food.name}</span>`
  }
  return foods
}

const drinksMenu = (data) => {
  let drinks = ''
  for (const drink of data) {
    drinks += `<span>${drink.name}</span>`
  }
  return drinks
}

const consumerReviews = (data) => {
  let reviews = ''
  for (const review of data) {
    reviews += `
    <div class="detail-reviews-item">
      <h4 class="detail-reviews-item-header">${review.name}</h4>
      <p class="detail-reviews-item-text">${review.review}</p>
      <span class="detail-reviews-item-date">${review.date}</span>
    </div>
    `
  }
  return reviews
}

export { restaurantCategories, foodsMenu, drinksMenu, consumerReviews }
