<template>
  <div class="welfare-content-wrapper">
    <div class="title-wrapper">维迈公益</div>
    <swiper class="swiper" ref="mySwiper" :options="swiperOption">
      <swiper-slide class="stop-swiping"
        ><gongyi1 :list="list1"></gongyi1
      ></swiper-slide>
      <swiper-slide class="stop-swiping"
        ><gongyi2 :list="list2"></gongyi2
      ></swiper-slide>
    </swiper>
    <div class="bottom-swiper flex justify-center">
      <img
        src="../../assets/images/arrow-left.jpg"
        alt=""
        style="margin-right:309px"
        @click="goPrev"
      />
      <img src="../../assets/images/arrow-right.jpg" alt="" @click="goNext" />
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import gongyi1 from './gongyi1'
import gongyi2 from './gongyi2'
import { getCategory } from '@/api'

export default {
  components: {
    swiper,
    swiperSlide,
    gongyi1,
    gongyi2
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },

  data() {
    return {
      swiperOption: {
        // loop: true,
        noSwipingClass: 'stop-swiping',
        noSwiping: true
      },
      list1: [],
      list2: []
    }
  },
  created() {
    this.getGonyi1()
    this.getGongyi2()
  },
  methods: {
    goNext() {
      this.swiper.slideNext()
    },
    goPrev() {
      this.swiper.slidePrev()
    },
    getGongyi2() {
      getCategory(null, 6).then(ret => {
        if (ret.result) {
          let list = ret.result.map(c => {
            return {
              // image: c.bg.md,
              image: c.bg.md + '?x-oss-process=image/resize,h_550',
              title: c.title.zh,
              desc: c.content.zh,
              href: c.link.herf
            }
          })
          let listLen = list.length
          let multiple = parseInt(listLen / 3)
          let remainder = listLen % 3
          let arr = this.computeArr(
            list.slice(multiple * 3),
            list,
            multiple,
            remainder
          )
          let listMulti = list.slice(0, multiple * 3)
          let groupList = []
          for (let i = 0; i < multiple; i++) {
            groupList.push([...listMulti.slice(i * 3, 3 * (i + 1))])
          }
          if (arr.length > 0) {
            groupList.push(arr)
          }
          this.list2 = groupList
        }
      })
    },
    getGonyi1() {
      getCategory(null, 7).then(ret => {
        if (ret.result) {
          let list = ret.result.map(c => {
            return {
              image: c.bg.md,
              // image: c.bg.md + '?x-oss-process=image/resize,h_550',
              title: c.title.zh,
              desc: c.content.zh,
              href: c.link.herf
            }
          })
          this.list1 = list
        }
      })
    },
    computeArr(list, fullList, multiple, remainder) {
      let arr = []
      switch (remainder) {
        case 0: {
          arr = []
          break
        }
        case 1: {
          if (multiple == 0) {
            arr = [list[0], list[0], list[0]]
          } else {
            arr = [list[0], fullList[0], fullList[1]]
          }
          break
        }
        case 2: {
          if (multiple == 0) {
            arr = [list[0], list[1], list[0]]
          } else {
            arr = [list[0], list[1], fullList[0]]
          }
        }
      }
      return arr
    }
  }
}
</script>

<style lang="less">
.welfare-content-wrapper {
  background-color: white;
  padding-top: 12vh;
  min-height: 100vh;
  .title-wrapper {
    font-size: 28px;
    font-weight: bold;
    width: 18vw;
    color: white;
    height: 7vh;
    margin: auto;
    line-height: 7vh;
    text-align: center;
    background: url('../../assets/images/木牌.png') no-repeat;
    background-size: cover;
    background-origin: center;
    background-position: center;
  }
  .bottom-swiper {
    width: 80vw;
    margin: auto;
    margin-top: 1vh;
    // padding: 0.2vw;
    img {
      width: 3vw;
      height: 3vw;
    }
  }
}
</style>