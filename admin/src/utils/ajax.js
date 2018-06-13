import axios from 'axios'
import { message } from 'antd'

message.config({
  top:200,
  duration:2
})

axios.defaults = Object.assign(axios.defaults, {
  baseURL: 'http://127.0.0.1:7001',
  timeout: 5000,
  withCredentials: true
})

axios.interceptors.response.use(function (response) {
  console.log(response)
  let data = response.data
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      console.log(e)
    }
  }
  if (data.code !== 0) {
    if (data.code === -2) {
      // 未登录
      alert(data.message)
      // 清除登陆信息
      localStorage.clear()
      return Promise.resolve(null)
    } else {
      message.error(data.data)
      // alert(data.data)
      return Promise.resolve(null)
    }
  }
  return data.data
}, function (error) {
  alert(error, JSON.stringify(error))
  alert('网络异常，请稍后再试')
  return Promise.resolve(null)
})

const ajax = {}

// 文件上传
ajax.upload = (url, params, progressCallback) => {
  return axios.post(url, params, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    timeout: 50000,
    onUploadProgress: progressCallback
  })
}

ajax.get = (url, params) => {
  return axios.get(url, {
    params
  })
}

ajax.post = (url, params) => {
  return axios(url, {
    method: 'post',
    data: params
  })
}

export default ajax
