<template>
  <div class="thumb-swiper relative">
    <swiper class=" h-full relative" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in swiperList" :key="'swiper' + index"
        ><div
          class="banner-wrapper flex items-center"
          :style="{
            backgroundImage:
              'url(' + item.bg.md + '?x-oss-process=image/resize,h_1080' + ')'
          }"
        >
          <div class=" text-white pl-20">
            <p
              class="mb-4 text-left"
              style="font-size:30px"
              data-swiper-parallax="-240"
            >
              {{ item.title.zh }}
            </p>
            <p
              class="text-left"
              style="font-size:14px;line-height:1.5"
              data-swiper-parallax="-400"
              v-html="item.content.zh.replace(/(\;|\；)/g, '<br>')"
            ></p>
          </div>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper-slide>
    </swiper>
    <div class="thumb-pagination flex  z-10">
      <div
        class="image-wrapper cursor-pointer"
        v-if="nextInfo"
        @click="goNextThree"
      >
        <img
          :src="nextInfo.bg.md + '?x-oss-process=image/resize,h_100'"
          alt=""
        />
        <div class="mask flex items-center text-font-16 p-8 text-brighter">
          {{ nextInfo.parent_name }}
        </div>
      </div>
      <div class="image-wrapper cursor-pointer" v-else @click="goFirst">
        <img
          :src="this.swiperList[0].bg.md + '?x-oss-process=image/resize,h_100'"
          alt=""
        />
        <div class="mask flex items-center text-font-16 p-8 text-brighter">
          {{ this.swiperList[0].parent_name }}
        </div>
      </div>

      <div class="flex items-center relative bg-brighter control-wrapper ">
        <span class=" text-white  text-font-26 ml-4">{{
          currentIndex + 1 >= 10 ? currentIndex + 1 : '0' + (currentIndex + 1)
        }}</span>
        <div class="direction flex">
          <div
            class=" bg-white w-10 h-10 flex justify-center items-center cursor-pointer"
            @click="goPre"
          >
            <i class="el-icon-arrow-left text-font-24"></i>
          </div>
          <div
            @click="goNext"
            class=" bg-black w-10 h-10 flex justify-center items-center cursor-pointer"
          >
            <i class="el-icon-arrow-right text-white text-font-24"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import image1 from '@/assets/images/home/img1.jpeg'
import image2 from '@/assets/images/home/img2.jpeg'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: ['parentArr', 'swiperList'],
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    nextIndex() {
      return this.parentIndex + 1
    },
    nextInfo() {
      if (this.childParentMap[this.nextIndex]) {
        let getFirst = this.childParentMap[this.nextIndex][0]
        return this.swiperList[getFirst]
      } else {
        return null
      }
    }
  },
  mounted() {
    let childParentMap = {}
    this.parentArr.forEach((parent, pindex) => {
      childParentMap[pindex] = []
      this.swiperList.forEach((item, index) => {
        if (item.parent_id === parent.id) {
          childParentMap[pindex].push(index)
        }
      })
    })
    this.childParentMap = childParentMap
    console.log('=====childParentMap=======')
    console.log(childParentMap)
    this.$nextTick(() => {
      this.watcher = this.$watch('swiper.realIndex', function(val) {
        console.log('======relal index===')
        console.log(val)
        this.currentIndex = val
        console.log(childParentMap)
        let length = childParentMap[this.parentIndex].length
        if (val > childParentMap[this.parentIndex][length - 1]) {
          this.parentIndex++
        }
        if (val < childParentMap[this.parentIndex][0]) {
          this.parentIndex--
        }
      })
    })
  },
  beforeDestroy() {
    this.watcher && this.watcher()
  },
  data() {
    return {
      // imageSrc: image1,
      // nextInfo:{
      //   imageUrl:'',
      //   title:''
      // },

      currentIndex: 0,
      parentIndex: 0,
      childParentMap: {},
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      watcher: null
    }
  },
  methods: {
    goPre() {
      this.swiper.slidePrev()
    },
    goFirst() {
      this.swiper.slideTo(0)
    },
    goNext() {
      this.swiper.slideNext()
    },
    gotoIndex(index) {
      this.swiper.slideTo(index)
    },
    goNextThree() {
      let nextIndex = this.childParentMap[this.nextIndex][0]
      this.swiper.slideTo(nextIndex)
    }
  }
}
</script>

<style lang="less" scoped>
.thumb-swiper {
  height: 100vh;
  position: relative;
  // height: (9/16) * 100vw;
  .banner-wrapper {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .thumb-pagination {
    position: absolute;
    bottom: 48px;
    right: 66px;
    width: 280px;
    height: 94px;
    .image-wrapper {
      width: 190px;
      height: 94px;
      position: relative;
      .mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .control-wrapper {
      width: 90px;
    }
  }
  .direction {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
}
</style>