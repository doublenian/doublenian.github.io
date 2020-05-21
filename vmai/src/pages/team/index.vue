<template>
  <div class="team">
    <div class="header flex justify-center items-center">
      <p class=" text-white text-font-32 font-weight-bold mt-20">精英团队</p>
    </div>
    <div class="body mx-auto py-4">
      <swiper class="swiper " :options="swiperOption">
        <swiper-slide
          v-for="(item, index) in list"
          :key="'swipe' + index"
          class="flex items-center"
        >
          <div
            class=" bg-image w-full bg-no-repeat bg-cover bg-center"
            :style="{ backgroundImage: 'url(' + item.image + ')' }"
          >
            <div class="profile flex items-center justify-center">
              <p class=" text-font-18 text-white font-bold mr-3">阿拉丁</p>
              <p class=" text-font-18  text-brighter">CEO,总裁</p>
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
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      list: [
        {
          image: require('../../assets/images/team/1.jpg'),
          name: '陈章勤',
          title: 'CEO,总裁',
          desc: 'F来得及奥拉夫家乐福基督教奥拉夫法律的纠纷发电量近'
        },
        {
          image: require('../../assets/images/team/2.jpg'),
          name: '陈章勤',
          title: 'CEO,总裁',
          desc: 'F来得及奥拉夫家乐福基督教奥拉夫法律的纠纷发电量近'
        },
        {
          image: require('../../assets/images/team/3.jpg'),
          name: '陈章勤',
          title: 'CEO,总裁',
          desc: 'F来得及奥拉夫家乐福基督教奥拉夫法律的纠纷发电量近'
        },
        {
          image: require('../../assets/images/team/4.jpg'),
          name: '陈章勤',
          title: 'CEO,总裁',
          desc: 'F来得及奥拉夫家乐福基督教奥拉夫法律的纠纷发电量近'
        },
        {
          image: require('../../assets/images/team/2.jpg'),
          name: '陈章勤',
          title: 'CEO,总裁',
          desc: 'F来得及奥拉夫家乐福基督教奥拉夫法律的纠纷发电量近'
        },
        {
          image: require('../../assets/images/team/3.jpg'),
          name: '陈章勤',
          title: 'CEO,总裁',
          desc: 'F来得及奥拉夫家乐福基督教奥拉夫法律的纠纷发电量近'
        }
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true
      }
    }
  }
}
</script>

<style lang="less">
.team {
  background: white;
  .header {
    width: 100%;
    height: 260px;
    background: url('../../assets/images/company-profile/顶部图片.jpg');
    background-size: cover;
    background-position: center;
  }
  .body {
    width: 960px;
    min-height: 60vh;
    .swiper {
      height: 480px;
      width: 100%;
      .swiper-slide {
        .bg-image {
          width: 240px;
          height: 420px;
          transition: all ease 0.3s;
          position: relative;
          .profile {
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.58);
            width: 100%;
            height: 60px;
          }
          &:hover {
            height: 94%;
            box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.58);
          }
        }
      }
    }
  }
}
</style>