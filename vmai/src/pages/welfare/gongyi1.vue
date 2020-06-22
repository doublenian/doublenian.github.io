<template>
  <div class="welfare-body">
    <div class="beijing"></div>
    <div style="width:802px">
      <p class="body-title">“V·CAN WE GO!” 战疫爱心接力行动</p>
      <p class="list-title">
        2020年初面对来势汹汹的新型冠状病毒肺炎疫情，作为以“取之社会、用之社会”为企业公益理念的维迈<br />集团以实际行动支持着前线上冲锋陷阵直面病魔的医护人员。
      </p>
      <ul>
        <li>
          春节期间，维迈集团员工们自发在全国各捐助平台及机构组织进行捐助，累计捐款近200,000元并将各方募集来的6000<br />枚医用外科口罩直接送至有需求的医院。
        </li>
        <li>
          2月13日，上海维迈集团委托江西分公司向江西龙津镇政府捐赠了牛奶、方便面、桂圆干、消毒湿巾等近40,000元慰问物资，分发给全镇各村、社区263个岗哨疫情防控人员。
        </li>
        <li>
          2月26日，维迈集团创始人陈章勤与维迈品牌创始人《爱情公寓》Lisa榕--榕榕携手上海泰州商会向战斗在一线的复旦大学附属中山医院白衣天使们捐赠防疫物资共45箱。其中包括医用口罩8540件，N95口罩240件，防护隔离服423件，护目镜575件。
        </li>
        <li>
          2月27日，维迈集团昆山花桥生产基地前往上海最重要门户道口之一的花桥G2收费站向现场检查一线的工作人员捐赠抗疫物资。本批物资包括口罩1000个，防护服50件，额温枪10把。
        </li>
      </ul>
    </div>

    <div class="welfare-swiper mx-auto py-4">
      <swiper class="swiper" :options="swiperOption" v-if="list.length > 0">
        <swiper-slide
          v-for="(item, index) in list"
          :key="'swipe' + index"
          class=" bg-no-repeat bg-cover bg-center "
          :style="{ backgroundImage: 'url(' + item.image + ')' }"
        >
          <div class="swiper-title">{{ item.title }}</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// * type = 6 维迈公益
//  * type = 7 抗击疫情
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { getCategory } from '@/api'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      list: [],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 14,
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  },
  created() {
    getCategory(null, 7).then(ret => {
      if (ret.result) {
        let list = ret.result.map(c => {
          return {
            image: c.bg.md,
            // image: c.bg.md + '?x-oss-process=image/resize,h_550',
            title: c.title.zh,
            desc: c.content.zh,
            href: c.link.herf
          }
        })
        this.list = list
      }
    })
  }
}
</script>

<style lang="less">
.welfare-body {
  width: 80vw;
  margin: auto;
  margin-top: 5vh;
  position: relative;
  .beijing {
    position: absolute;
    top: 0;
    width: 30vw;
    right: 0;
    bottom: 0;
    background: url('../../assets/images/welfare/背景.png') no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
  .body-title {
    color: rgba(236, 108, 31, 1);
    font-size: 1.5vw;
  }
  .list-title {
    margin-top: 2vh;
    font-size: 1vw;
  }
  ul {
    li {
      margin-top: 2vh;
      list-style-type: circle;
    }
  }
  .welfare-swiper {
    margin-top: 1.5vh;
    width: 100%;
    height: 25vh;
    padding: 0.7vw 1.3vh;
    background-color: rgba(181, 0, 5, 1);
    .swiper {
      height: 100%;
      .swiper-slide {
        height: 100%;
        background-color: lightgray;
        position: relative;
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
}
</style>