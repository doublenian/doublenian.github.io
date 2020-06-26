<template>
  <div class="coronavirus-body flex">
    <div class="left-swiper">
      <swiper class="swiper" :options="swiperOption" v-if="list.length > 0">
        <swiper-slide
          class="flex flex-col justify-between"
          v-for="(item, index) in list"
          :key="'swiper' + index"
        >
          <a
            :href="item[0].herf"
            target="_blank"
            class="block1 bg-cover bg-top relative block"
            :style="{ backgroundImage: 'url(' + item[0].image + ')' }"
          >
            <div class="swiper-title" v-if="item[0].title">
              {{ item[0].title }}
            </div>
          </a>
          <div class="block-wrapper flex justify-between">
            <a
              :href="item[1].herf"
              target="_blank"
              class="block bg-cover bg-center relative block"
              :style="{ backgroundImage: 'url(' + item[1].image + ')' }"
            >
              <div class="swiper-title" v-if="item[1].title">
                {{ item[1].title }}
              </div>
            </a>
            <a
              :href="item[2].herf"
              target="_blank"
              class="block bg-cover bg-center relative block"
              :style="{ backgroundImage: 'url(' + item[2].image + ')' }"
            >
              <div class="swiper-title" v-if="item[2].title">
                {{ item[2].title }}
              </div>
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="right-container flex justify-between">
      <div class="image-rongrong"></div>
      <div class="right-desc flex-1">
        <p class="title1">V CAN WE GO！</p>
        <p class="title2 my-4">助学扶贫——苦志育才慈善学校</p>
        <p class="title3 mb-2">助学扶贫：</p>
        <p class="title4">
          苦志育才慈善学校专为孤儿、失养家庭和特困家庭儿童提供免费食宿和教育，目前在湖南省永州市新田县、郴州市桂阳县已开办两所学校，累计帮助近400名困境儿童解决教与养的问题，帮助失去父母、被遗弃或是家庭无力抚养的“苦”孩子完成学业，度过人生最艰难的时光。、海外优质教育资源的机会。通过招生官联盟，学生能得到最契合高校招生标准的艺术留学申请指导，有方向、有重点的提升能力，最大程度优化申请结果、增加申请成功和高额奖学金几率。苦志育才慈善学校专为孤儿、失养家庭和特困家庭儿童提供免费家庭无力抚养的“苦”孩子完成学业，度过人生最艰难的时光。、海外优质教育资源的机会。通过招请成功和高额奖学金几率。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// * type = 6 维迈公益
//  * type = 7 抗击疫情
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: ['list'],
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style lang="less">
.coronavirus-body {
  width: 80vw;
  margin: auto;
  margin-top: 5vh;
  .left-swiper {
    width: 40vw;
    height: 68vh;
    .swiper {
      height: 100%;
      .swiper-slide {
        height: 100%;
        position: relative;
        .block1 {
          width: 40vw;
          height: 35vh;
        }
        .block-wrapper {
          width: 40vw;
          height: 32vh;
          .block {
            width: 19.8vw;
            height: 100%;
          }
        }
        .swiper-title {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 4vh;
          color: white;
          line-height: 4vh;
          text-align: center;
          font-size: 1.1vw;
          background: rgba(237, 109, 40, 0.7);
        }
      }
      width: 100%;
    }
  }
  .right-container {
    margin-left: 8px;
    .image-rongrong {
      width: 16vw;
      height: 100%;
      background: url('../../assets/images/coronavirus/tupian14.jpg') no-repeat;
      background-size: cover;
      background-origin: center;
      background-position: center;
      margin-right: 8px;
    }
    .right-desc {
      width: 24vw;
      color: white;
      height: 100%;
      background-color: #ed6d28;
      padding: 4vh 2vw 0px;
      font-size: 0.9vw;
      .title1 {
        font-weight: bold;
        font-size: 1.5vw;
      }
      .title2 {
        font-size: 1.1vw;
      }
    }
  }
}
</style>