<template>
  <div class="thumb-swiper relative">
    <swiper class=" h-full relative" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in swiperList" :key="'swiper' + index"
        ><div
          class="banner-wrapper"
          :style="{ backgroundImage: 'url(' + item.bg.md + ')' }"
        ></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper-slide>
    </swiper>
    <div class="thumb-pagination flex bg-brighter z-10">
      <div
        class="image-wrapper"
        @click="$emit('clickItem', itemIndex + 1)"
        v-if="nextThreeLevelInfo"
      >
        <img :src="nextThreeLevelInfo.children[0].bg.md" alt="" />
        <div class="mask flex items-center text-font-16 p-8 text-brighter">
          {{ nextThreeLevelInfo.title.zh }}
        </div>
      </div>

      <div class="flex items-center relative  control-wrapper ">
        <span class=" text-white  text-font-26 ml-4">01</span>
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
  props: ['nextThreeLevelInfo', 'swiperList', 'itemIndex'],
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.swiper)
    })
  },
  data() {
    return {
      imageSrc: image2,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    goPre() {
      this.swiper.slidePrev()
    },
    goNext() {
      this.swiper.slideNext()
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