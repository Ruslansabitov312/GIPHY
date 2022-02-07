import { GET_GIPHY } from '../constants/getGiphy'

export const getGyphyReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_GIPHY:
      return { data: action.payload.data }
    default:
      return state
  }
}
