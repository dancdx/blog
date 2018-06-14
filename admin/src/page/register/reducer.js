import {
  REGISTER
} from './constains'

const INIT_STATE = {
  list: []
}

const register = (state = INIT_STATE, action) =>{
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.data
      }
    default:
      return state
  }
}

export default register
 

