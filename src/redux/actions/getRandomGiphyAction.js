import { GET_RANDOM_GIPHY } from '../constants/getRandomGiphy'
import axios from 'axios'
import {LINK, API_KEY} from '../../api/api'

export const getRandomGiphy = (limit = 50, offset = 0) =>
  async (dispatch) => {
    const URL = `${LINK}/random?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`
    const { data } = await axios.get(URL)
    dispatch({ type: GET_RANDOM_GIPHY, payload: data })
  }
