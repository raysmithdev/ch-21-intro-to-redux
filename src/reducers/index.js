import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  // nameOfReducer: reducer
  counterReducer,
  userReducer
})

export default rootReducer
