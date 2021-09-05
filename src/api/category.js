import { request } from '@/utils/request'

export function getCategoryList () {
  return request({
    url: '/categoryList',
    method: 'GET'
  })
}

export function getCategoryData () {
  return request({
    url: '/categoryData',
    method: 'GET'
  })
}
