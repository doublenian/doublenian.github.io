<template>
  <div class="company-profile">
    <div class="header flex justify-center items-center">
      <p class=" text-white text-font-32 font-weight-bold mt-20">集团简介</p>
    </div>
    <div class="content mx-auto py-4">
      <div>
        <p class=" pb-5 text-font-18 items-center border-b border-gray-400">
          维迈集团简介
        </p>
        <div class="jianjie ">
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
            <p>
              实现了汇聚设计创意、定制制作、执行服务
              于一体的创新型创意集成运维商
            </p>
            <p>维迈助力全球各行业著名品牌 提升项目整体品质、优化空间体验价值</p>
            <p>让创意设计建设因集成和创新而发生改变</p>
          </div>
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
    width: 820px;
  }
  .jianjie {
    height: 500px;
    position: relative;
    padding: 10px 0;
    line-height: 1.5;
    .right-top {
      position: absolute;
      right: 0;
      top: 0;
      width: 300px;
      color: #333333;
      font-size: 12px;
    }
    .left-bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 380px;
      color: #333333;
      font-size: 12px;
    }
  }
}
</style>