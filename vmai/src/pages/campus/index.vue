<template>
  <div class="campus-wrapper">
    <thumb-swiper
      v-if="parentArr.length > 0"
      :swiperList="displayArr"
      :parentArr="parentArr"
    ></thumb-swiper>
  </div>
</template>

<script>
import ThumbSwiper from '@/components/thumb-swiper'
import { mapGetters } from 'vuex'
import { getCategory } from '@/api'
export default {
  components: {
    ThumbSwiper
  },
  computed: {
    ...mapGetters(['layoutHorizFourData', 'threeLevelDataMap'])
  },
  data() {
    return {
      threeLevelId: this.$route.params.id,
      displayArr: [],
      parentArr: []
    }
  },
  async created() {
    await this.$store.dispatch('category/queryThreeLevel')

    let layoutHoriz = this.threeLevelDataMap[this.threeLevelId].filter(
      c => c.layout
    )
    console.log('=====layoutHoriz=====')
    console.log(layoutHoriz)
    let layoutHorizPromise = layoutHoriz
      .map(c => c.id)
      .map(id => this.getList(id))
    let layoutHorizData = await Promise.all(layoutHorizPromise)
    let fourLevels = []
    layoutHoriz.forEach((item, index) => {
      fourLevels.push({
        ...item,
        name: item.titleZh,
        children: layoutHorizData[index]
      })
    })
    this.displayArr = fourLevels
    console.log('====fourLevels=====')
    console.log(fourLevels)
    let arr = []
    fourLevels.forEach(c => {
      c.children = c.children.map(child => {
        return {
          ...child,
          parent_name: c.title.zh
        }
      })
      arr = [...arr, ...c.children]
    })
    let parentArr = []
    for (let i = 0; i < arr.length; i++) {
      if (parentArr.find(c => c.id === arr[i].parent_id)) {
        continue
      } else {
        parentArr.push({
          id: arr[i].parent_id,
          name: arr[i].parent_name
        })
      }
    }
    console.log(parentArr)
    this.parentArr = parentArr
    this.displayArr = arr
  },
  mounted() {},
  methods: {
    getList(id) {
      return getCategory(id).then(ret => {
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
    },
    handleClick(data) {
      this.dataIndex = data
    }
  }
}
</script>

<style>
.campus-wrapper {
  height: 100vh;
}
</style>