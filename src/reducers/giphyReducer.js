const SET_COUNT = 'SET_COUNT'

const defaultState = {
  count: 0,
}

export default function giphyReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      }
    default:
      return state
  }
}

export const setCount = (count) => ({ type: SET_COUNT, payload: count })
