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
            <div class="profile ">
              <div class="icon-image flex justify-center items-center">
                <img src="../../assets/images/team/arrow-up.png" alt="" />
              </div>

              <div class="flex  items-end justify-center" style="height:60px">
                <p class=" text-font-18 text-white font-bold mr-3">阿拉丁</p>
                <p class=" text-font-14  text-brighter">CEO,总裁</p>
              </div>
              <div class="py-4 text-white px-6 profile-desc">
                <p class=" text-center">
                  中国共产党党员，维迈集团党委书记，同济大学建筑系硕士，徐汇区石龙路党委书记，高级建筑工程师
                  中国共产党党员，维迈集团党委书记，同济大学建筑系硕士，徐汇区石龙路党委书记，高级建筑工程师
                  中国共产党党员，维迈集团党委书记，同济大学建筑系硕士，徐汇区石龙路党委书记，高级建筑工程师
                </p>
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
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
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
          &:hover {
            .profile > .icon-image {
              transform: rotate(180deg);
            }
            .profile > .profile-desc {
              transform: scaleY(1);
              opacity: 1;
              height: auto;
            }
          }
          .profile {
            position: absolute;
            bottom: 0px;
            background-color: rgba(0, 0, 0, 0.58);
            width: 100%;
            // min-height: 60px;

            .icon-image {
              position: absolute;
              width: 40px;
              height: 40px;
              left: 50%;
              top: -20px;
              margin-left: -20px;
              transition: all ease 0.3s;

              padding: 4px;
              border: 4px solid rgba(255, 255, 255, 0.58);
              border-radius: 100%;
            }
            .profile-desc {
              transition: all ease 0.3s;
              transform-origin: bottom;
              transform: scaleY(0);
              opacity: 0;
              height: 0;
            }
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