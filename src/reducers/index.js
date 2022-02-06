import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import giphyReducer from './giphyReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  giphy: giphyReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
