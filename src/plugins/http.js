
import axios from 'axios'

const http = axios.create({
  baseURL: process.env.API_BASE_URL
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
