import axios from 'axios'
import vm from '../main'

// 创建axios实例
const service = axios.create({
  base_url: '/api' // api的base_url
})

// request拦截器
service.interceptors.request.use((config) => {
  const { token } = vm.$store.token
  if (token) {
    config.headers['Access-Token'] = token
  }
  return config
}, (error) => {
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use((response) => {
  if (response.statuse) {
    const { data } = response
    if (data.status === 403) {
      // 用户未登录，重新跳转到微信授权页面登录
      // 作相应处理
    }
    return data
  }
  return response
}, error => {
  Promise.reject(error)
})

export default service
