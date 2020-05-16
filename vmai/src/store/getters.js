const getters = {
  oneLevelData: state => state.category.oneLevelData,
  twoLevelMenu: state => state.category.twoLevelData,
  threeLevelMenu: state => state.category.threeLevelData,
  //二级与三级的映射，有助于通过二级菜单直接获取第三集
  threeLevelDataMap: state => state.category.threeLevelDataMap,
  bannerData: state => state.category.bannerData,
  layoutHorizFourData: state => state.category.layoutHorizFourData
}
export default getters
