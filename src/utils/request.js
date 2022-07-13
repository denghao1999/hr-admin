import axios from 'axios'

const request = axios.create({
  // 用环境变量 配置基准地址
  baseURL:process.env.VUE_APP_BASE_API,
  // 设置超时时间
  timeout:5000
})

export default request
