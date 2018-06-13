import { LOGIN, API } from './constains'
import { push, replace } from 'react-router-redux'
import ajax from '@/utils/ajax'

export const login = (params) => {
  return async (dispatch) =>{
    
    const data = await ajax.post(API.login,{
      username:params.username,
      password:params.password
    })
    if(data){
      dispatch({
        type:LOGIN,
        data
      })
      localStorage.setItem('user', JSON.stringify(data))
      dispatch(push('/user'))
    }
  }
}

