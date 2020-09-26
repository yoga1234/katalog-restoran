const detailPage = () => {
  return `
    <section class="detail-container">
      <button class="detail-back-button"> <span class="detail-back-left-arrow">&lt;</span> Back</button>
      <h2 class="detail-restaurant-name">Restaurant Name</h2>
      <div class="detail-restaurant-image"></div>
      <div class="detail-description">
        <h3 class="detail-description-header">Description</h3>
        <p class="detail-description-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
      </div>
      <div class="detail-city">
        <h3 class="detail-city-header">City</h3>
        <p class="detail-city-text">Bandung</p>
      </div>
      <div class="detail-address">
        <h3 class="detail-address-header">Address</h3>
        <p class="detail-address-text">Jln. Pustakawan no 9</p>
      </div>
      <div class="detail-categories">
        <h3 class="detail-categories-header">Categories</h3>
        <div class="detail-categories-list">
          <span>One</span>
          <span>Two</span>
          <span>Three</span>
          <span>Four</span>
        </div>
      </div>
      <div class="detail-menu">
        <h3 class="detail-menu-header">Menu Available</h3>
        <div class="detail-menu-list">
          <div class="detail-menu-foods">
            <span>1. Some menu here</span>
            <span>2. Some menu here</span>
            <span>3. Some menu here</span>
            <span>4. Some menu here</span>
            <span>5. Some menu here</span>
            <span>6. Some menu here</span>
            <span>7. Some menu here</span>
            <span>8. Some menu here</span>
          </div>
          <div class="detail-menu-drinks">
            <span>1. Some menu here</span>
            <span>2. Some menu here</span>
            <span>3. Some menu here</span>
            <span>4. Some menu here</span>
            <span>5. Some menu here</span>
            <span>6. Some menu here</span>
            <span>7. Some menu here</span>
            <span>8. Some menu here</span>
          </div>
        </div>
      </div>
      <div class="detal-rating">
        <h3 class="detail-rating-header">Rating</h3>
        <p class="detail-rating-text">4.7 From 5 points</p>
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