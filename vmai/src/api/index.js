import request from '@/utils/request'

//获取顶部菜单接口
/**
 * 
status: {
  1: '上架',
  2: '删除',
  5: '下架'
}
type = 1 获取顶部导航栏
type = 2 获取底部导航栏
type = 3 精英人物
 */
export function getCategory(parent_id, type) {
  let params = {
    parent_id: parent_id || '',
    states: [1]
  }
  type && (params.types = [type])

  return request({
    url: '/category/list',
    method: 'post',
    data: params
  })
}

export function searchCategory(keyword) {
  let params = {
    keyword: keyword,
    states: [1]
  }

  return request({
    url: '/category/search',
    method: 'post',
    data: params
  })
}
