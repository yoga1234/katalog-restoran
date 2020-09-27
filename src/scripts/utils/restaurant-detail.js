const restaurantCategories = (data) => {
  console.log(data)
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

export { restaurantCategories, foodsMenu, drinksMenu }
