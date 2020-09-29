import urlParser from '../routes/url-parser'

const detailAddReviewEvent = () => {
  // check if the hash url is on the detail page
  const detailUrl = window.location.href.split('/')[3].slice(1).toLowerCase()
  if (detailUrl === 'detail') {
    const formSubmit = document.getElementById('detail-review-form-submit')
    formSubmit.addEventListener('submit', (e) => {
      e.preventDefault()
      const reviewName = document.getElementById('reviewname').value
      const reviewDescription = document.getElementById('reviewdescription').value
      const dataSend = {
        name: reviewName,
        review: reviewDescription
      }
      urlParser.insertReviewData(dataSend)
    })
  }
}

export default detailAddReviewEvent
