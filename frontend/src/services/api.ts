import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3333/'

})

instance.interceptors.request.use((config) => {
  if (process.browser) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

export default instance
