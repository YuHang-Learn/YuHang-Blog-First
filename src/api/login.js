import { request } from '@/utils/request'

export function Login (data) {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}
