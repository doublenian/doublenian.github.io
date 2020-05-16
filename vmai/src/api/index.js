import request from '@/utils/request'

//获取顶部菜单接口
/**
 * 
status: {
  1: '上架',
  2: '删除',
  5: '下架'
}
 */
export function getCategory(parent_id) {
  return request({
    url: '/category/list',
    method: 'post',
    data: {
      parent_id: parent_id || '',
      states: [1]
    }
  })
}
