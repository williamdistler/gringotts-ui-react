import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.3.20.145:8082/'
})

export default api;