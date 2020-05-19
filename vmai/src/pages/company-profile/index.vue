<template>
  <div class="company-profile">
    <div class="header flex justify-center items-center">
      <p class=" text-white text-font-32 font-weight-bold mt-20">集团简介</p>
    </div>
    <div class="content mx-auto py-4">
      <div>
        <p
          class=" pb-5 font-weight-bold text-font-18 items-center border-b border-gray-400"
        >
          维迈集团简介
        </p>
        <div class="jianjie mt-4">
          <div class="right-top text-right">
            <p class=" text-primary text-font-16 mb-5">维迈集团简介</p>
            <div>
              <p>维迈集团成立于2007年</p>
              <p>致力专注于建筑规划设计、建筑装饰、国际精品店装</p>
              <p>酒店会所、企业办公空间、博物馆展览馆智能化创意</p>
              <p>及大宅别墅家居软装设计与施工等配套服务</p>
            </div>
          </div>
          <div class="left-bottom text-left text-font-14">
            <p>十多年来</p>
            <p>维迈凭借着丰富的多元化行业资源库和成熟的本土化执行运维力</p>
            <p>实现了汇聚设计创意、定制制作、执行服务</p>
            <p>于一体的创新型创意集成运维商</p>
            <p>维迈助力全球各行业著名品牌</p>
            <p>提升项目整体品质、优化空间体验价值</p>
            <p>让创意设计建设因集成和创新而发生改变</p>
          </div>
        </div>
      </div>
      <div>
        <p
          class="mt-6 font-weight-bold pb-5 text-font-18 items-center border-b border-gray-400"
        >
          维迈资质荣誉
        </p>
        <div class=" flex justify-between flex-wrap">
          <img
            :src="
              require('../../assets/images/company-profile/prize/' + i + '.png')
            "
            alt=""
            class=" mt-6"
            style="display:block;height:57px"
            v-for="i in 22"
            :key="'list' + i"
          />
        </div>
        <div class=" mt-6 flex justify-between">
          <img
            src="../../assets/images/company-profile/图片1.png"
            style=" width:45%"
            alt=""
          />
          <img
            src="../../assets/images/company-profile/图片2.png"
            style=" width:45%"
            alt=""
          />
        </div>
        <p
          class="mt-6 font-weight-bold pb-5 text-font-18 items-center border-b border-gray-400"
        >
          维迈集团地址
        </p>
        <div class=" mt-6">
          <p class=" font-bold">上海维迈科建集团有限公司</p>
          <p class=" my-2">
            <span class=" font-bold">联系电话:</span> 021-64707511
          </p>
          <p>
            <span class=" font-bold">总部地址:</span>
            上海市徐汇区田林路418号B栋200233
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.company-profile {
  background: white;
  .header {
    width: 100%;
    height: 260px;
    background: url('../../assets/images/company-profile/顶部图片.jpg');
    background-size: cover;
    background-position: center;
  }
  .content {
    width: 800px;
  }
  .jianjie {
    height: 500px;
    position: relative;
    padding: 10px 0;
    line-height: 1.5;
    background: url('../../assets/images/company-profile/企业简介背景.png')
      no-repeat;
    background-size: contain;
    font-size: 12px;
    .right-top {
      position: absolute;
      right: 0;
      top: 0;
      width: 300px;
      color: #333333;
    }
    .left-bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 380px;
      font-size: 12px;
      color: #333333;
    }
  }
}
</style>