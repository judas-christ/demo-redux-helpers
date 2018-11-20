import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { rootReducer } from './reducers'

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
})

export const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, composeEnhancers())
