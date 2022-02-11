import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { getGyphyReducer } from './reducer/giphyReducer'
import { getRandomGiphyReducer} from './reducer/randomGiphyReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  giphy       : getGyphyReducer,
  randomGiphy : getRandomGiphyReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
