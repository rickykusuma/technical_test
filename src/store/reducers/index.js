import { combineReducers } from '@reduxjs/toolkit'
import { filterReducer } from './filter'

const rootReducer = combineReducers({
  filter: filterReducer
})
export default rootReducer
