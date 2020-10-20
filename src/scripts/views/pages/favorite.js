import cardCreator from '../../utils/card-creator'

const favoritePage = (data) => {
  let favoriteReturn = ''

  if (data.length === 0) {
    favoriteReturn = '<h3 class="no-favorite-restaurant">No favorite restaurant saved.</h3>'
  }

  favoriteReturn += cardCreator(data)

  return `
      <section id="main-content" class="article-container">
        <h2 class="section-header">Favorite Restaurant</h2>
          ${favoriteReturn}
      </section>
    `
}
export default favoritePage
