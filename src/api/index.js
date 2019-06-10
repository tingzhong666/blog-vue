import http from './http'

// 博文列表
export const blog = function ({ page = 1, limit = 10, tabid = 0 }) {
  return http.get('/blog', {
    params: {
      page,
      limit,
      tabid
    }
  })
}

// 博主信息
export const info = function () {
  return http.get('/info')
}

// 分类/标签
export const tab = function () {
  return http.get('/tabs')
}

// 搜索
export const search = function ({ q, page = 1, limit = 10 }) {
  return http.get('/search', {
    params: {
      q,
      page,
      limit
    }
  })
}

// 博文详情
export const details = function (id) {
  return http.get('/details/' + id)
}

// 博文的回复
export const comments = function (id) {
  return http.get('/comments/' + id)
}

// 关于
export const about = function () {
  return http.get('/about')
}
