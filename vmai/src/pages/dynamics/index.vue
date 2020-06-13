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
.dynamics-content-wrapper {
  background-color: white;
  padding-top: 130px;
  padding-bottom: 30px;
  min-height: 100vh;
  .title-wrapper {
    font-size: 28px;
    font-weight: bold;
    width: 180px;
    color: white;
    height: 50px;
    margin: auto;
    line-height: 50px;
    text-align: center;
    background: url('../../assets/images/木牌.png') no-repeat;
    background-size: cover;
    background-origin: center;
    background-position: center;
  }
  .bottom-swiper {
    width: 1200px;
    margin: auto;
    padding: 10px;
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>