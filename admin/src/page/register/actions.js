import { REGISTER, API } from './constains'
import { push, replace } from 'react-router-redux'
import ajax from '@/utils/ajax'

export const register = (params) => {
  return async (dispatch) =>{
    
    const data = await ajax.post(API.register,{
      username:params.nickname,
      password:params.password,
      phone:params.phone,
      email:params.email
    })
    if(data){
      dispatch({
        type:REGISTER,
        data
      })
      dispatch(push('/login'))
    }
  }
}

