import axios from 'axios'
import { Message } from 'element-ui'
const request = axios.create({
  // 用环境变量 配置基准地址
  baseURL: process.env.VUE_APP_BASE_API,
  // 设置超时时间
  timeout: 5000
})
// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response);
  // 数据结构
  const { data, success, message } = response.data
  // 如果成功了 就直接返回一个 data数据 就是token
  if (success) {
    return data
  } else {
    // 如果失败了 就返回一个错误对象
    Message.error(message)  // element ui 中的错误提示
    return Promise.reject(new Error(message))
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default request
