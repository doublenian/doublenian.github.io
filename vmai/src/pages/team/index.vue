<template>
  <div class="team">
    <div class="header flex justify-center items-center">
      <p class=" text-white text-font-32 font-weight-bold mt-20">精英团队</p>
    </div>
    <div class="body mx-auto ">
      <swiper class="swiper " :options="swiperOption" v-if="list.length > 0">
        <swiper-slide
          v-for="(item, index) in list"
          :key="'swipe' + index"
          class="flex items-center"
        >
          <div
            class=" bg-image w-full bg-no-repeat bg-cover bg-center bg-top"
            :style="{ backgroundImage: 'url(' + item.image + ')' }"
          >
            <div class="profile py-6">
              <div class="icon-image flex justify-center items-center">
                <img src="../../assets/images/team/arrow-up.png" alt="" />
              </div>

              <div class="flex  items-end justify-center">
                <p class=" text-font-18 text-white font-bold mr-3 ">
                  {{ item.name }}
                </p>
                <p class=" text-font-14  text-brighter">
                  {{ item.title }}
                </p>
              </div>
              <div
                class="pt-4 text-white px-6 profile-desc"
                style="padding-bottom:6vh"
              >
                <p
                  class=" text-center"
                  v-html="item.desc.replace(/(\;|\；)/g, '<br>')"
                ></p>
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
    getCategory(null, 3).then(ret => {
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
        spaceBetween: 1,
        loop: true,
        autoplay: {
          delay: 8000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style lang="less">
@slideHeight: 60vh;
.team {
  background-color: rgb(48, 49, 50);
  min-width: 1200px;
  margin: auto;
  .header {
    width: 100%;
    height: 200px;
    background: url('../../assets/images/company-profile/顶部图片.jpg');
    background-size: cover;
    background-position: center;
  }
  .body {
    width: 100%;
    height: calc(100vh - 200px);
    // min-height: 60vh;
    .swiper {
      height: 100%;
      width: 100%;
      .swiper-slide {
        .bg-image {
          // width: 25vw;
          height: 100%;
          transition: all ease 0.3s;
          position: relative;
          &:hover {
            .profile > .icon-image {
              transform: rotate(180deg);
            }
            .profile > .profile-desc {
              // transform: translateY(0);
              display: block;
              // opacity: 1;
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
              border: 4px solid rgba(255, 255, 255, 0.1);
              border-radius: 100%;
            }
            .profile-desc {
              transition: all ease 0.3s;
              transform-origin: bottom;
              // transform: scaleY(0);
              // transform: translateY(100%);
              // opacity: 0;
              display: none;
            }
          }
          &:hover {
            height: calc(100vh - 150px);
            box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.58);
          }
        }
      }
    }
  }
}
</style>