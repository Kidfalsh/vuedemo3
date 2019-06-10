import fetch from '../utils/fetch'

// 获取通知消息列表
export const getNewList = data => fetch.post('/teacher/notification/list', data)
  .then(res => res)
  .catch()
