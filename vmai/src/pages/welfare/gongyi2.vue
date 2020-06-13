<template>
  <div class="coronavirus-body flex">
    <div class="left-swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          class="flex flex-col justify-between"
          v-for="(item, index) in list"
          :key="'swiper' + index"
        >
          <div
            class="block1 bg-cover bg-center relative"
            :style="{ backgroundImage: 'url(' + item[0].imageUrl + ')' }"
          >
            <div class="swiper-title" v-if="item[0].title">
              {{ item[0].title }}
            </div>
          </div>
          <div class="block-wrapper flex justify-between">
            <div
              class="block bg-cover bg-center relative"
              :style="{ backgroundImage: 'url(' + item[1].imageUrl + ')' }"
            >
              <div class="swiper-title" v-if="item[1].title">
                {{ item[1].title }}
              </div>
            </div>
            <div
              class="block bg-cover bg-center relative"
              :style="{ backgroundImage: 'url(' + item[2].imageUrl + ')' }"
            >
              <div class="swiper-title" v-if="item[2].title">
                {{ item[2].title }}
              </div>
            </div>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      list: [
        [
          {
            imageUrl: require('../../assets/images/coronavirus/tupian11.jpg'),
            title: '腾讯公益活动'
          },
          {
            imageUrl: require('../../assets/images/coronavirus/tupian12.jpg'),
            title: '乡村支教活动'
          },
          {
            imageUrl: require('../../assets/images/coronavirus/tupian13.jpg'),
            title: '爱心接力行动'
          }
        ]
      ]
    }
  }
}
</script>

<style lang="less">
.coronavirus-body {
  width: 1200px;
  margin: auto;
  margin-top: 30px;
  .left-swiper {
    width: 532px;
    height: 496px;
    .swiper {
      height: 100%;
      .swiper-slide {
        height: 100%;
        background-color: lightgray;
        position: relative;
        .block1 {
          width: 532px;
          height: 229px;
          background-color: red;
        }
        .block-wrapper {
          width: 532px;
          height: 260px;
          .block {
            width: 263px;
            height: 100%;
            background-color: gray;
          }
        }
        .swiper-title {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 51px;
          color: white;
          line-height: 51px;
          text-align: center;
          font-size: 22px;
          background: rgba(237, 109, 40, 0.7);
        }
      }
      width: 100%;
    }
  }
  .right-container {
    margin-left: 8px;
    .image-rongrong {
      width: 221px;
      height: 496px;
      background: url('../../assets/images/coronavirus/tupian14.jpg') no-repeat;
      background-size: cover;
      background-origin: center;
      background-position: center;
      margin-right: 8px;
    }
    .right-desc {
      width: 420px;
      color: white;
      height: 496px;
      background-color: #ed6d28;
      padding: 38px 36px 0px;

      .title1 {
        font-weight: bold;
        font-size: 30px;
      }
      .title2 {
        font-size: 21px;
      }
    }
  }
}
</style>