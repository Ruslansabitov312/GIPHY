import { GET_GIPHY } from '../constants/getGiphy'
import axios from 'axios'
import { LINK, API_KEY } from '../../api/api'

export const getGiphy = (limit = 50, offset = 0) =>
  async (dispatch) => {
    const URL = `${LINK}/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`
    const { data } = await axios.get(URL)
    dispatch({ type: GET_GIPHY, payload: data })
  }
