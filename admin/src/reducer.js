import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import login from './page/login/reducer'

export default combineReducers({
  login,
  routing: routerReducer
})