<template>
  <div class="dynamics-content-wrapper">
    <div class="title-wrapper">集团动态</div>
    <swiper
      class="swiper"
      ref="mySwiper"
      :options="swiperOption"
      v-if="list.length > 0"
    >
      <swiper-slide v-for="(dynamic, index) in list" :key="'dynamic' + index">
        <dynamic1 v-if="dynamic.type === 0" :data="dynamic.data"></dynamic1>
        <dynamic2 v-if="dynamic.type === 1" :data="dynamic.data"></dynamic2>
      </swiper-slide>
      <!-- <swiper-slide><dynamic2></dynamic2></swiper-slide> -->
    </swiper>
    <div class="bottom-swiper flex justify-center" v-if="showFoot">
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
import { getCategory } from '@/api'

import 'swiper/css/swiper.css'
import dynamic1 from './dynamic1'
import dynamic2 from './dynamic2'
export default {
  components: {
    swiper,
    swiperSlide,
    dynamic1,
    dynamic2
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true
      },
      templateName: '',
      list: [],
      showFoot: true
    }
  },
  created() {
    getCategory(null, 5).then(ret => {
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

        this.list = this.getCombileList([...list]).filter(
          c => c.data.length > 0
        )
      }
    })
  },
  methods: {
    getCombileList(thisList) {
      let listLen = thisList.length
      let multiple = parseInt(listLen / 9)
      let remainder = listLen % 9
      console.log(multiple)
      console.log(remainder)
      let fullList = [...thisList]
      if (multiple == 0) {
        let list = [...thisList]
        let arr = this.computeArray(list, fullList, multiple, remainder)
        return arr
      } else {
        let list = thisList.slice(multiple * 9)
        let arr = this.computeArray(list, fullList, multiple, remainder)
        let multiList = thisList.slice(0, multiple * 9)
        let groupList = []
        for (let i = 0; i < multiple; i++) {
          groupList.push([...multiList.slice(i * 9, 9 * (i + 1))])
        }
        console.log('===groupList===')
        console.log(groupList)
        let rangeList = []
        groupList.forEach(item => {
          rangeList.push({
            type: 0,
            data: item.slice(0, 4)
          })
          rangeList.push({
            type: 1,
            data: item.slice(4)
          })
        })
        return rangeList.concat(arr)
      }
    },
    computeArray(list, fullList, multiple, remainder) {
      let arr = []
      switch (remainder) {
        case 1: {
          if (multiple == 0) {
            arr = [
              {
                type: 0,
                data: [list[0], list[0], list[0], list[0]]
              },
              {
                type: 1,
                data: []
              }
            ]
            this.showFoot = false
          } else {
            arr = [
              {
                type: 0,
                data: [list[0], fullList[0], fullList[1], fullList[2]]
              },
              {
                type: 1,
                data: []
              }
            ]
          }

          break
        }
        case 2: {
          if (multiple == 0) {
            arr = [
              {
                type: 0,
                data: [list[0], list[1], list[0], list[1]]
              },
              {
                type: 1,
                data: []
              }
            ]
            this.showFoot = false
          } else {
            arr = [
              {
                type: 0,
                data: [list[0], list[1], fullList[0], fullList[1]]
              },
              {
                type: 1,
                data: []
              }
            ]
          }

          break
        }
        case 3: {
          if (multiple == 0) {
            arr = [
              {
                type: 0,
                data: [list[0], list[1], list[2], list[0]]
              },
              {
                type: 1,
                data: []
              }
            ]
            this.showFoot = false
          } else {
            arr = [
              {
                type: 0,
                data: [list[0], list[1], list[2], fullList[0]]
              },
              {
                type: 1,
                data: []
              }
            ]
          }

          break
        }
        case 4: {
          if (multiple === 0) {
            this.showFoot = false
          }
          arr = [
            {
              type: 0,
              data: list
            },
            {
              type: 1,
              data: []
            }
          ]

          break
        }
        case 5: {
          arr = [
            {
              type: 0,
              data: []
            },
            {
              type: 1,
              data: list
            }
          ]
          if (multiple === 0) {
            this.showFoot = false
          }
          break
        }
        case 6: {
          arr = [
            {
              type: 0,
              data: list.slice(0, 4)
            },
            {
              type: 1,
              data: [...list.slice(4), fullList[0], fullList[1], fullList[2]]
            }
          ]
          break
        }
        case 7: {
          arr = [
            {
              type: 0,
              data: list.slice(0, 4)
            },
            {
              type: 1,
              data: [...list.slice(4), fullList[0], fullList[1]]
            }
          ]
          break
        }
        case 8: {
          arr = [
            {
              type: 0,
              data: list.slice(0, 4)
            },
            {
              type: 1,
              data: [...list.slice(4), fullList[0]]
            }
          ]
          break
        }
      }
      return arr
    },
    goNext() {
      this.swiper.slideNext()
    },
    goPrev() {
      this.swiper.slidePrev()
    }
  }
}
</script>

<style lang="less">
.dynamics-content-wrapper {
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