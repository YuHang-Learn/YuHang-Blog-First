import { request } from '@/utils/request'

export function getCategoryList () {
  return request({
    url: '/categoryList',
    method: 'GET'
  })
}

export function getCategoryData ({ page, perPage }) {
  return request({
    url: '/categoryData',
    method: 'GET',
    params: { page, perPage }
  })
}
