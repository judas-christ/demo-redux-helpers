import { createReducer } from './utils'
import { ADD } from './actions'

export const rootReducer = createReducer(
  { count: 0 },
  {
    [ADD]: (state, action) => ({
      ...state,
      count: state.count + action.amount
    })
  }
)
