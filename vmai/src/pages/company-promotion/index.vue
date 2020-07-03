<template>
  <div class="company-promotion">
    <div class="w-full h-32"></div>
    <!-- <div class="header flex justify-center items-center">
      <p class=" text-white text-font-32 font-weight-bold mt-20">集团简介</p>
    </div> -->

    <div class="video-wrapper">
      <video
        loop
        autoplay
        controls
        class="myVideo"
        ref="myVideo"
        style="object-fit: cover"
        poster="../../assets/images/promotion/背景.jpg"
      >
        <source
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/xuanchuan.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      <!-- <img
        src="../../assets/images/promotion/bofang-2.png"
        alt=""
        class=" cursor-pointer"
        @click="playVideo"
        v-if="showPlayBtn"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPlayBtn: true
    }
  },
  mounted() {},
  methods: {
    playVideo() {
      this.$refs.myVideo.play()
      this.showPlayBtn = false
    }
  }
}
</script>

<style lang="less">
.company-promotion {
  min-width: 1200px;
  margin: auto;
  .video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    .poster {
      position: absolute;
      z-index: 2;
      left: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: url('../../assets/images/promotion/背景.jpg') no-repeat;
      background-position: center;
      background-size: cover;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
    }
    .myVideo {
      width: 100%;
      height: 100%;
    }
  }
}
</style>