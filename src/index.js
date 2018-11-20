import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import * as serviceWorker from './serviceWorker'
// import { App } from './no-utils/App'
// import { configureStore } from './no-utils/configureStore'
import { App } from './with-utils/App'
import { configureStore } from './with-utils/configureStore'

const store = configureStore({ count: 0 })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
