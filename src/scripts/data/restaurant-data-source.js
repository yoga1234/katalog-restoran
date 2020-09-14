import CONFIG from '../globals/config'

const getListRestaurant = async () => {
  const response = await fetch(CONFIG.HOME_URL)
  const responseJson = await response.json()
  return responseJson
}

export default getListRestaurant
