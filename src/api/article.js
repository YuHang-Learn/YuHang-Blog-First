import { request } from '@/utils/request'

export function getArticleList (val = '全部') {
  return request({
    url: '/articleList',
    method: 'GET',
    params: {
      val
    }
  })
}
