import axios from 'axios'
import { Toast } from 'vant'
const http = axios.create()

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://m.maizuo.com/' : 'https://m.maizuo.com/'
http.defaults.timeout = 10000

http.interceptors.response.use(response => {
  let res = response.data
  if (res.status === 0) {
    // 接口真正成功
    return res
  } else {
    // 接口后台逻辑有bug
    Toast(res.msg)
  }
}, error => {
  Toast(error.message)
})

export default http
