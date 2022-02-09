import { GET_RANDOM_GIPHY } from '../constants/getRandomGiphy'

const defaultState = {
  data: []
}

export const getRandomGiphyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_RANDOM_GIPHY:
      return { data: action.payload.data }
    default:
      return state
  }
}
