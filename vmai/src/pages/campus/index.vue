<template>
  <div>
    <thumb-swiper
      v-if="index === dataIndex"
      @clickItem="handleClick"
      :swiperList="item.children"
      :itemIndex="index"
      :nextThreeLevelInfo="
        index === displayArr.length - 1 ? false : displayArr[index + 1]
      "
      :key="'displayArr' + index"
      v-for="(item, index) in displayArr"
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
      threeLevelId: this.$route.query.id,
      displayArr: [],
      dataIndex: 0
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
</style>