<template>
  <div class="welfare-content-wrapper">
    <div class="title-wrapper">维迈公益</div>
    <swiper class="swiper" ref="mySwiper" :options="swiperOption">
      <swiper-slide class="stop-swiping"><gongyi1></gongyi1></swiper-slide>
      <swiper-slide class="stop-swiping"><gongyi2></gongyi2></swiper-slide>
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
        loop: true,
        noSwipingClass: 'stop-swiping',
        noSwiping: true
      }
    }
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