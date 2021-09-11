import axios from 'axios'
import store from '@/store'
import router from '@/router'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000
  })
  instance.interceptors.request.use((config) => {
    if (!config.params) {
      config.params = {}
    }
    config.params.path = router.app._route.path
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    if (userInfo) {
      store.commit('setInfo', JSON.parse(sessionStorage.getItem('userInfo')))
      config.headers.Authorization = `Bearer ${userInfo.token}`
    }
    return config
  })
  return instance(config)
}
