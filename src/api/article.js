import { request } from '@/utils/request'

export function getArticleList () {
  return request({
    url: '/articleList',
    method: 'GET'
  })
}
