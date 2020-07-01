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
//获取咨询列表
export function getConsultList(data) {
  return request({
    url: '/admin/consult/list',
    method: 'post',
    data
  })
}
//新建菜单

/**
 * {
  "bg": {
    "md": "string",
    "sm": "string"
  },
  "content": {
    "en": "string",
    "zh": "string"
  },
  "icon": "string",
  "id": "string",
  "layer": 0,
  "layout": 0,
  "link": {
    "herf": "string",
    "target": 0
  },
  "meta": {
    "create_at": 0,
    "create_by": "string",
    "state": 0,
    "update_at": 0
  },
  "name": "string",
  "parent_id": "string",
  "title": {
    "en": "string",
    "zh": "string"
  },
  "type": 0,
  "weight": 0
}
 * @param {*} data 
 */

export function categoryAdd(data) {
  return request({
    url: '/admin/category/add',
    method: 'post',
    data
  })
}

//菜单列表

export function categoryList(data) {
  return request({
    url: '/admin/category/list',
    method: 'post',
    data
  })
}

//菜单上下架

export function setState(id, state) {
  return request({
    url: `/admin/category/${id}/${state}`,
    method: 'post'
  })
}

//修改接口

export function modifyCategory(id, data) {
  ///admin/category/{id}/update
  return request({
    url: `/admin/category/${id}/update`,
    method: 'post',
    data
  })
}

//分公司添加
/**
 * {
  "address": {
    "en": "string",
    "zh": "string"
  },
  "contract": {
    "en": "string",
    "zh": "string"
  },
  "email": "string",
  "id": "string",
  "lng_lat": "string",
  "meta": {
    "create_at": 0,
    "create_by": "string",
    "state": 0,
    "update_at": 0
  },
  "mobile": "string",
  "name": {
    "en": "string",
    "zh": "string"
  },
  "weight": 0
}
 * @param {} params 
 */
export function addCompany(data) {
  return request({
    url: `/admin/company/add`,
    method: 'post',
    data
  })
}
//分公司列表
export function listCompany() {
  return request({
    url: `/admin/company/list`,
    method: 'post',
    data: {}
  })
}

//分公司修改
///admin/company/{id}/update
export function updateCompany(id, data) {
  return request({
    url: `admin/company/${id}/update`,
    method: 'post',
    data
  })
}

//分公司删除
//state=2 表示删除
export function deleteCompany(id, state) {
  return request({
    url: `/admin/company/${id}/${state}`,
    method: 'post'
  })
}
