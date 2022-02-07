import { GET_GIPHY } from '../constants/getGiphy'
import axios from 'axios'

export const getGiphy = () => async (dispatch) => {
  const { data } = await axios.get('https://api.giphy.com/v1/gifs/trending', {
    params: {
      api_key: 'lCcfcyzZiHAAeLbBrscp7kNPlQJTTVDC',
    },
  })
  dispatch({ type: GET_GIPHY, payload: data })
}
