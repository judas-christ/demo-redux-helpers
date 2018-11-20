import { ADD } from './actions'

export const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + action.amount }
    default:
      return state
  }
}
