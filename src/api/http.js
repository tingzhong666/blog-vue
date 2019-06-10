import axios from 'axios'
import { Message } from 'element-ui'

const http = axios.create({
  baseURL: '/v1'
})

// 响应拦截
http.interceptors.response.use((res) => {
  if (res.status !== 200) {
    Message.error('响应状态码：' + res.status + ' 请打开控制台查看响应对象')
    return Promise.reject(new Error('响应状态码：' + res.status + ' 请打开控制台查看响应对象'))
  }
  return res.data
})

export default http
