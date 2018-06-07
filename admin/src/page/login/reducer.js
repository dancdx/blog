import {
  LOGIN
} from './constains'

const INIT_STATE = {
  list: []
}

const login = (state = INIT_STATE, action) =>{
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.data
      }
    default:
      return state
  }
}

export default login
 

