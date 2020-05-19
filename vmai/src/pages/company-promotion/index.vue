<template>
  <div class="promotion-content">
    <div class="header flex justify-center items-center mb-8">
      <p class=" text-white text-font-32 font-weight-bold mt-20">企业宣传片</p>
    </div>
    <div class=" flex justify-center pb-8">
      <video-player
        ref="videoPlayer"
        class="video-wrapper-box"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        @ready="playerReadied"
      >
      </video-player>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import poster from '../../assets/images/promotion/背景.jpg'
export default {
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src: 'http://vjs.zencdn.net/v/oceans.mp4'
          }
        ],
        poster: poster
      }
    }
  },
  mounted() {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>

<style lang="less">
.promotion-content {
  background-color: white;
  .video-js .vjs-big-play-button {
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
  }
  .header {
    width: 100%;
    height: 260px;
    background: url('../../assets/images/company-profile/顶部图片.jpg');
    background-size: cover;
    background-position: center;
  }

  .video-wrapper-box {
    width: 500px;
    transform: translateX(-250px);
  }
}
</style>