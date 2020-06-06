//type 枚举
/**
 * type =1 顶部导航栏
 * type =2 底部导航栏
 * type =3 精英人物
 * type = 4 Banner
 */

export default {
  status: {
    1: '上架',
    2: '删除',
    5: '下架'
  },
  position: {
    1: '顶部导航栏',
    2: '底部导航栏'
  },
  displayModes: {
    1: '横版海报'
  },
  //Banner 跳转外链方式
  linkerType: [
    {
      label: 1,
      name: '无交互'
    },
    {
      label: 2,
      name: '跳转外链'
    },
    {
      label: 3,
      name: '跳转内链'
    },
    {
      label: 4,
      name: '跳转视频'
    }
  ]
}
