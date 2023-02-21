import axios from 'axios'

export const getSpeakers = async () => {
  return await axios
    .get(' https://pro.alphadevteam.com/api/tz/speakers')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}
