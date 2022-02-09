import { GET_RANDOM_GIPHY } from '../constants/getRandomGiphy'
import axios from 'axios'


const API_KEY = `lCcfcyzZiHAAeLbBrscp7kNPlQJTTVDC`

export const getRandomGiphy = (limit = 50, offset = 0) =>
  async (dispatch) => {
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`
    const { data } = await axios.get(URL)
    dispatch({ type: GET_RANDOM_GIPHY, payload: data })
  }
