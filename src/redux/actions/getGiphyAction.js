import { GET_GIPHY } from '../constants/getGiphy'
import axios from 'axios'


const API_KEY = `lCcfcyzZiHAAeLbBrscp7kNPlQJTTVDC`

export const getGiphy = (limit = 50, offset = 0) =>
  async (dispatch) => {
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`
    const { data } = await axios.get(URL)
    dispatch({ type: GET_GIPHY, payload: data })
  }
