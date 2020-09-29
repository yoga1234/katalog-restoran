import CONFIG from '../globals/config'

const getListRestaurant = async () => {
  const response = await fetch(CONFIG.BASE_URL + CONFIG.HOME_URL)
  const responseJson = await response.json()
  return responseJson
}

const getDetailRestaurant = async (id) => {
  const response = await fetch(CONFIG.BASE_URL + CONFIG.DETAIL_URL + id)
  const responseJson = await response.json()
  return responseJson
}

const addNewReview = async (data) => {
  const sendRequest = await fetch(CONFIG.BASE_URL + CONFIG.ADD_REVIEW_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': '12345'
    },
    body: JSON.stringify({
      id: data.id,
      name: data.name,
      review: data.review
    })
  })
  return sendRequest
}

export { getListRestaurant, getDetailRestaurant, addNewReview }
