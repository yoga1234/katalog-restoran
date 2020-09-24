import paginationSystem from '../../utils/pagination-system'

const homePage = (data, pageInformation) => {
  let page
  let homeReturn = ''
  let dataStart = 1
  let dataCounter = 1
  let dataShow = 1

  const { activePage, pageDestination } = pageInformation
  const maxDataToShow = 9

  if (pageInformation === 'empty') {
    page = paginationSystem('empty')
    homeReturn = `
    <div class="loading-animation">
      <div class="loading-data"></div>
        <p class="loading-text">LOADING...</p>
      </div>
      <div class="home-content">
    </div>
    `
  } else {
    if (activePage < pageDestination) {
      for (let i = 1; i < pageDestination; i++) {
        dataStart = dataStart + maxDataToShow
      }
    } else if (activePage > pageDestination) {
      dataStart = (((maxDataToShow * pageDestination) - maxDataToShow) + dataStart)
    }
    page = paginationSystem(data.count, activePage, pageDestination)
    homeReturn += `
      <div class="home-content">
    `

    for (const restaurant of data.restaurants) {
      if (dataStart <= dataCounter) {
        if (dataShow <= maxDataToShow) {
          if (restaurant.description.length > 150) {
            restaurant.description = restaurant.description.substring(0, 120) + '...'
          }
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
          dataShow++
        } else {
          break
        }
      }
      dataCounter++
    }
    homeReturn += `
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
      ${homeReturn}
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
