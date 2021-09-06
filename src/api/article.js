import { request } from '@/utils/request'

export function getArticleList ({ page = 1, perPage = 10, val = '全部' }) {
  return request({
    url: '/articleList',
    method: 'GET',
    params: {
      page,
      perPage,
      val
    }
  })
}

export function getFilterArticleList ({ classifyName = '全部', date1 = '0', date2 = '0', page = 1, perPage = 10 }) {
  return request({
    url: '/filterArticleList',
    method: 'GET',
    params: {
      classifyName,
      date1,
      date2,
      page,
      perPage
    }
  })
}
