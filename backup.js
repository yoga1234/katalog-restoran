page = paginationSystem(homeData.count, activePage)
    homeReturn += `
      <div class="home-content">
    `
    for (const restaurant of homeData.restaurants) {
      if (restaurant.description.length > 150) {
        restaurant.description = restaurant.description.substring(0, 120) + '...'
      }
      if (dataCounter <= maxDataToShow) {
        homeReturn += `
          <article class="card-article" data-number-item="${dataCounter}/${activePage}">
            <figure>
              <img class="article-image" src="https://dicoding-restaurant-api.el.r.appspot.com/images/small/${restaurant.pictureId}" alt="Kafe dengan nama ${restaurant.name}">
            </figure>
            <h3 class="article-title">${restaurant.name}</h3>
            <p class="article-desc">${restaurant.description}</p>
            <div class="article-footer">
              <p class="article-footer-item-1">${restaurant.city}</p>
              <p class="article-footer-item-2">Rating: ${restaurant.rating}/5</p>
            </div>
          </article>`
        dataCounter++
      } else {
        break
      }
    }
    homeReturn += `
      </div>
    `