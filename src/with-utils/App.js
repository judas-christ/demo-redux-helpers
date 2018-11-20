import React from 'react'
import { connect } from 'react-redux'
import { add } from './actions'

export const AppComponent = ({ count, add }) => (
  <div className="App">
    <h1>{count}</h1>
    <button onClick={() => add(1)}>+</button>
    <button onClick={() => add(-1)}>-</button>
  </div>
)
const mapStateToProps = ({ count }) => ({
  count
})
const mapDispatchToProps = {
  add
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)

export const App = AppContainer(AppComponent)
