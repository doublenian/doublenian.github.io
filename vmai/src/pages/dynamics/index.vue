<template>
  <div class="dynamics-content-wrapper">
    <div class="title-wrapper">集团动态</div>
    <swiper class="swiper" ref="mySwiper" :options="swiperOption">
      <swiper-slide><dynamic1></dynamic1></swiper-slide>
      <swiper-slide><dynamic2></dynamic2></swiper-slide>
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
      list: []
    }
  },
  created() {
    getCategory(null, 5).then(ret => {
      if (ret.result) {
        this.list = ret.result.map(c => {
          return {
            image: c.bg.md + '?x-oss-process=image/resize,h_550',
            title: c.title.zh,
            desc: c.content.zh
          }
        })
        let listLen = this.list.length
        // if(listLen < 9) {
        //   if(listLen < 4 ) {

        //   }
        // }
        console.log(this.list)
      }
    })
  },
  methods: {
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