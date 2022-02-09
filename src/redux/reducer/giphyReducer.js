import { GET_GIPHY } from '../constants/getGiphy'

const defaultState = {
  data: []
}

export const getGyphyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_GIPHY:
      return { data: action.payload.data }
    default:
      return state
  }
}
