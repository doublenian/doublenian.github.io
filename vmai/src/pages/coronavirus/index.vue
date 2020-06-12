<template>
  <div class="coronavirus-content-wrapper">
    <div class="title-wrapper">维迈公益</div>
    <div class="coronavirus-body flex">
      <div class="left-swiper">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="flex flex-col justify-between">
            <div class="block1"></div>
            <div class="block-wrapper flex justify-between">
              <div class="block"></div>
              <div class="block"></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="right-container flex justify-between">
        <div class="image-rongrong"></div>
        <div class="right-desc flex-1">
          <p>V CAN WE GO！</p>
          <p>助学扶贫——苦志育才慈善学校</p>
          <p>助学扶贫：</p>
          <p>
            苦志育才慈善学校专为孤儿、失养家庭和特困家庭儿童提供免费食宿和教育，目前在湖南省永州市新田县、郴州市桂阳县已开办两所学校，累计帮助近400名困境儿童解决教与养的问题，帮助失去父母、被遗弃或是家庭无力抚养的“苦”孩子完成学业，度过人生最艰难的时光。、海外优质教育资源的机会。通过招生官联盟，学生能得到最契合高校招生标准的艺术留学申请指导，有方向、有重点的提升能力，最大程度优化申请结果、增加申请成功和高额奖学金几率。苦志育才慈善学校专为孤儿、失养家庭和特困家庭儿童提供免费家庭无力抚养的“苦”孩子完成学业，度过人生最艰难的时光。、海外优质教育资源的机会。通过招请成功和高额奖学金几率。
          </p>
        </div>
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
        {
          imageUrl: require('../../assets/images/welfare/tupian15.jpg'),
          title: '爱心抗疫活动'
        },
        {
          imageUrl: require('../../assets/images/welfare/tupian16.jpg'),
          title: '疫情就是命令'
        },
        {
          imageUrl: require('../../assets/images/welfare/tupian17.jpg'),
          title: '爱心接力行动'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.coronavirus-content-wrapper {
  background-color: white;
  padding-top: 140px;
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
        background: url('../../assets/images/coronavirus/tupian14.jpg')
          no-repeat;
        background-size: cover;
        background-origin: center;
        background-position: center;
        margin-right: 8px;
      }
      .right-desc {
      }
    }
  }
}
</style>