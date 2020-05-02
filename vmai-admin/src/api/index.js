import request from '@/utils/request'

//用户登陆
/**
 * 
 {
  "mobile": "string",
  "password": "string"
} 
 */
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

//新建用户
/**
 * 
 {"mobile": "string",
  "name": "string",
  "password": "string",
  "role": 0
 */
export function createUser(data) {
  return request({
    url: '/admin/user/create',
    method: 'post',
    data
  })
}

//获取用户列表

export function getUserList(data) {
  return request({
    url: '/admin/user/list',
    method: 'post',
    data
  })
}
