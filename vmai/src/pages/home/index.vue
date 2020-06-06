<template>
  <swiper
    class="swiper"
    :options="swiperOption"
    v-if="bannerData && bannerData.length > 0"
  >
    <swiper-slide v-for="(item, index) in bannerData" :key="'swiper' + index"
      ><div
        class="banner-wrapper flex items-center"
        :style="{
          backgroundImage:
            'url(' + item.imageUrl + '?x-oss-process=image/resize,h_1080' + ')'
        }"
      >
        <div class=" text-white pl-20" style="width:350px">
          <p
            class="mb-4 text-left"
            style="font-size:30px"
            data-swiper-parallax="-240"
          >
            {{ item.titleZh }}
          </p>
          <p
            class="text-left"
            style="font-size:14px;line-height:1.5"
            data-swiper-parallax="-400"
          >
            {{ item.contentZh }}
          </p>
        </div>
      </div></swiper-slide
    >
    <div
      class="swiper-pagination swiper-pagination-bullets"
      slot="pagination"
    ></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import arrowDown from '@/assets/images/home/arrow-down.png'

import { mapGetters } from 'vuex'
export default {
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapGetters(['bannerData'])
  },
  data() {
    return {
      swiperOption: {
        speed: 600,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            let image =
              this.bannerData[index].imageUrl +
              '?x-oss-process=image/resize,h_400'
            return `<div class="${className} swiper-pagination-bullet-custom">
              <div class="inner-block" style="background-image:url('${image}')" ></div>
              <div class="trige-wrapper"><img class="trige" src="${arrowDown}"/></div>
            </div>`
          }
        }
      }
    }
  },
  async created() {
    await this.$store.dispatch('category/getBannerData')
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './base.scss';
.swiper {
  height: 100vh;
  // height: (9/16) * 100vw;
  .banner-wrapper {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  /deep/ .swiper-pagination-bullet-custom {
    $size: 6px;
    position: relative;
    display: inline-block;
    width: $size;
    height: $size;
    background: #333 !important;
    border-radius: 100%;
    transition: all 0.3s;
    opacity: 1;
    $trigleWidth: 6px;

    .trige-wrapper {
      width: 280px;
      height: 14px;
      display: none;
      position: absolute;
      left: 50%;
      top: -14px;
      z-index: 999;
      transform: translateX(-50%);

      .trige {
        // width: 0;
        // height: 0;
        width: 20px;
        height: 20px;
        top: -3px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      &:hover {
        display: block;
      }
    }

    .inner-block {
      display: none;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -180px;
      width: 280px;
      height: 168px;
      background-size: cover;
      background-position: center;
      border: 2px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.68);
      border-radius: 8px;
      position: relative;
      &:hover {
        display: block;
      }
    }
    &:hover {
      .inner-block {
        display: block;
      }
      .trige-wrapper {
        display: block;
      }
    }

    &.swiper-pagination-bullet-active {
      width: 18px;
      height: 6px;
      border-radius: 3px;
      // border-radius: 100%;
      background-color: white !important;
    }
  }
}
</style>