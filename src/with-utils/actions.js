import { makeActionCreator } from './utils'

export const ADD = 'ADD'
export const add = makeActionCreator(ADD, 'amount')
