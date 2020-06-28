<template>
  <div class="certification">
    <div class="header flex justify-center items-center">
      <p class=" text-white text-font-32 font-weight-bold mt-20">资质荣誉</p>
    </div>
    <div class="body mx-auto ">
      <div
        @click="goPrev"
        class="arrow-item-left arrow-item flex justify-center items-center cursor-pointer"
      >
        <img src="../../assets/images/certfication/left.png" alt="" />
      </div>
      <div
        @click="goNext"
        class="arrow-item-right arrow-item flex justify-center items-center cursor-pointer"
      >
        <img src="../../assets/images/certfication/right.png" alt="" />
      </div>

      <swiper
        class="swiper "
        ref="mySwiper"
        :options="swiperOption"
        v-if="list.length > 0"
      >
        <swiper-slide
          v-for="(item, index) in list"
          :key="'swipe' + index"
          class="flex items-center"
        >
          <div
            class=" bg-image w-full bg-no-repeat bg-cover bg-center bg-top"
            :style="{ backgroundImage: 'url(' + item.image + ')' }"
          >
            <div class="background-blur flex items-center">
              <img alt="" :src="item.image" class="w-full" />
              <div class="desc-content">
                {{ item.title }}
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { getCategory } from '@/api'

export default {
  components: {
    swiper,
    swiperSlide
  },
  created() {
    getCategory(null, 8).then(ret => {
      if (ret.result) {
        this.list = ret.result.map(c => {
          return {
            image: c.bg.md + '?x-oss-process=image/resize,h_550',
            name: c.name,
            title: c.title.zh,
            desc: c.content.zh
          }
        })
      }
    })
  },
  data() {
    return {
      list: [],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 8000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
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
@slideHeight: 60vh;
.certification {
  background-color: rgb(48, 49, 50);
  min-width: 1200px;
  margin: auto;
  .header {
    width: 100%;
    height: 200px;
    background: url('../../assets/images/company-profile/顶部图片.jpg');
    background-size: contain;
    background-position: center;
  }
  .body {
    width: 92vw;
    height: calc(80vh - 200px);
    margin-top: 10vh;
    position: relative;
    .arrow-item {
      position: absolute;
      z-index: 999;
      top: 50%;
      transform: translateY(-50%);
      width: 5vw;
      height: 19vh;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      img {
        width: 2.5vw;
      }
    }
    .arrow-item-left {
      left: 10px;
    }
    .arrow-item-right {
      right: 20px;
    }
    // min-height: 60vh;
    .swiper {
      height: 100%;
      width: 100%;
      .swiper-slide {
        .bg-image {
          width: 22vw;
          height: 100%;
          position: relative;
          .background-blur {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            backdrop-filter: blur(8px);
            .desc-content {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 12px 12px;
              background-color: rgba(0, 0, 0, 0.5);
              color: #fdb732;
              font-size: 0.9vw;
              text-align: center;
            }
            // background-color: rgba(48, 54, 60, 0.8);
          }
        }
      }
    }
  }
}
</style>