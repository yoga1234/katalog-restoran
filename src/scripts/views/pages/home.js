import paginationSystem from '../../utils/pagination-system'

const homePage = (data, homeActivePage) => {
  let page
  let dataHome = ''
  let itemCounter = 1
  if (data === 'empty') {
    dataHome = `
    <div class="loading-animation">
    <div class="loading-data"></div>
    <p class="loading-text">LOADING...</p>
    </div>
    <div class="home-content">
    </div>
    `
  } else {
    page = paginationSystem(data.count, homeActivePage)
    dataHome += `
      <div class="home-content">
    `
    for (const restaurant of data.restaurants) {
      if (restaurant.description.length > 150) {
        restaurant.description = restaurant.description.substring(0, 120) + '...'
      }
      if (itemCounter <= 9) {
        dataHome += `
          <article class="card-article">
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
        itemCounter++
      } else {
        break
      }
    }
    dataHome += `
      </div>
    `
  }

  return `
    <section class="who-we-are-section">
      <div class="who-we-are-left">
        <h2>WHO WE ARE?</h2>
        <p>We are a global community called foodstyle, we'll rate a restaurant by free with proffesional rater. Register your restaurant right now and introduce your restaurant to the whole world!</p>
      </div>
      <div class="who-we-are-right">

      </div>
    </section>
    <section id="main-container" class="article-container">
      <h2 class="section-header">Restaurant Registered</h2>
      ${dataHome}
      <div class="pagination">
        ${page}
      </div>
    </section>
    <section class="our-service">
      <hr class="first-hr">
      <h2 class="restaurant-text">RESTAURANT</h2>
      <p class="service-text">SERVICE</p>
      <hr class="second-hr">
      <div class="our-service-card">
        <article class="friendly-staff-article">
          <div class="group-image"></div>
          <p>FRIENDLY STAFF</p>
          <span>Every staff has been trained at least six month with special instructor that come from every corner of every proffesional restaurant</span>
        </article>
        <article class="next-level-food-article">
          <div class="fork-image"></div>
          <p>NEXT LEVEL FOOD</p>
          <span>Food is served by proffesional chef that has mastered every piece of every ingredients mistery</span>
        </article>
        <article class="proven-quality-article">
          <div class="medal-image"></div>
          <p>PROVEN QUALITY</p>
          <span>Restaurant that has been registered is proven their quality by showing their perfomance in front of our tester and expert</span>
        </article>
      </div>
    </section>
  `
}

export default homePage
