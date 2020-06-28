import { getCategory } from '@/api'
const state = {
  oneLevelData: null,
  twoLevelData: null,
  threeLevelData: null,
  threeLevelDataMap: null,
  bannerData: null,
  layoutHorizFourData: []
}

const mutations = {
  SET_ONELEVEL: (state, data) => {
    state.oneLevelData = data
  },
  SET_TWOLEVEL: (state, data) => {
    state.twoLevelData = data
  },
  SET_THREELEVEL: (state, data) => {
    state.threeLevelData = data
  },
  SET_THREELEVEL_MAP: (state, data) => {
    state.threeLevelDataMap = data
  },
  SET_BANNER: (state, data) => {
    state.bannerData = data
  },
  SET_layoutHorizFourData: (state, data) => {
    state.layoutHorizFourData = data
  }
}
function getList(id, type) {
  return getCategory(id, type).then(ret => {
    let { result } = ret
    let data = []
    if (result) {
      data = result.map(c => {
        return {
          titleZh: c.title.zh,
          linker: c.link.href,
          ...c
        }
      })
    }
    return data
  })
}

const actions = {
  async getBannerData({ commit, state }) {
    if (state.bannerData) {
      return state.bannerData
    } else {
      let data = await getList(null, 4)
      commit(
        'SET_BANNER',
        data.map(c => {
          return {
            ...c,
            titleZh: c.title.zh,
            contentZh: c.content.zh,
            imageUrl: c.bg.md
          }
        })
      )
      return data
    }
  },
  async queryOneLevel({ commit, state }) {
    if (state.oneLevelData) {
      return state.oneLevelData
    } else {
      let data = await getList(null, 1)
      commit('SET_ONELEVEL', data)
      return data
    }
  },
  async queryTwoLevel({ commit, dispatch, state }) {
    if (state.twoLevelData) {
      return state.twoLevelData
    } else {
      let mainNavMenu = await dispatch('queryOneLevel')
      let subMenuPromise = mainNavMenu.map(c => c.id).map(id => getList(id))
      let subMenus = await Promise.all(subMenuPromise)
      let menuList = []
      mainNavMenu.forEach((item, index) => {
        menuList.push({
          ...item,
          children: subMenus[index]
            .sort((a, b) => b.weight - a.weight)
            .map(c => {
              return {
                ...c,
                showActive: false
              }
            }),
          showActive: false
        })
      })
      //获取所有的第四级

      commit('SET_TWOLEVEL', menuList)
      return menuList
    }
  },
  async queryThreeLevel({ commit, dispatch, state }) {
    if (state.threeLevelData) {
      return state.threeLevelData
    } else {
      let menuList = await dispatch('queryTwoLevel')
      let twoLevel = []
      menuList.forEach(c => {
        if (c.children.length > 0) {
          twoLevel = [...twoLevel, ...c.children]
        }
      })
      let threeLevelPromise = twoLevel.map(c => c.id).map(id => getList(id))
      let threeLevel = await Promise.all(threeLevelPromise)
      let menuListMap = {}
      for (let item of twoLevel) {
        menuListMap[item.id] = item
      }
      let filterThreeLevel = threeLevel.filter(c => c.length > 0)
      let arr = []
      filterThreeLevel.forEach(item => {
        arr = [...arr, ...item]
      })
      let threeLevelMap = {}
      arr.forEach(c => {
        if (!threeLevelMap[c.parent_id]) {
          threeLevelMap[c.parent_id] = []
        }
        threeLevelMap[c.parent_id].push(c)
      })
      commit('SET_THREELEVEL_MAP', threeLevelMap)
      let threeLevelArr = []
      for (let key in threeLevelMap) {
        threeLevelArr.push({
          id: key,
          name: menuListMap[key].titleZh,
          children: threeLevelMap[key]
        })
      }
      let layoutHorizFourData = threeLevelArr.map(c => c.layout === 1)
      commit('SET_layoutHorizFourData', layoutHorizFourData)
      commit('SET_THREELEVEL', threeLevelArr)
      return threeLevelArr
      //   let threeLevelWithParent = filterThreeLevel.map(c=>{

      //   })
      //   console.log('=====filterThreeLevel======')
      //   console.log(threeLevelArr)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
