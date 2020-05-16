<template>
  <div class="layout-footer flex flex-col">
    <div class="footer-info flex justify-between flex-1">
      <div class=" text-white">
        <p class=" text-font-18 mb-4">超链模块1</p>
        <ul class=" text-font-14 list-none" style="color:#7B7B7C">
          <li>超链地址1</li>
          <li>超链地址1</li>
          <li>超链地址1</li>
          <li>超链地址1</li>
        </ul>
      </div>
      <div class="split-line"></div>
      <div class=" text-white">
        <p class=" text-font-18 mb-4">超链模块1</p>
        <ul class=" text-font-14 list-none" style="color:#7B7B7C">
          <li>超链地址1</li>
          <li>超链地址1</li>
          <li>超链地址1</li>
          <li>超链地址1</li>
        </ul>
      </div>
      <div class="split-line"></div>
      <div class=" text-white">
        <p class=" text-font-18 mb-4">超链模块1</p>
        <ul class=" text-font-14 list-none" style="color:#7B7B7C">
          <li>超链地址1</li>
          <li>超链地址1</li>
          <li>超链地址1</li>
          <li>超链地址1</li>
        </ul>
      </div>
      <div class="split-line"></div>
      <div class=" text-white">
        <p class=" text-font-18 mb-4">联系我们</p>
        <div class=" text-font-14 mb-2">
          <p>联系电话:</p>
          <p>18917974488</p>
        </div>
        <div class=" text-font-14">
          <p>公司地址:</p>
          <p>上海市徐汇区田林路418号B栋200233</p>
        </div>
      </div>
      <div class=" text-white">
        <img
          src="@/assets/images/home/ewm.png"
          alt=""
          width="85"
          height="85"
          class=" mb-2"
        />
        <p>关注维迈公众号<br />获取最新行业资讯</p>
      </div>
    </div>
    <div
      class=" text-white text-font-12 text-center py-2 w-full"
      style="background-color:#303132;color:lightgrey"
    >
      @ 2017 V-CAN All Right Reservered 维迈装饰集团 版权所有 沪ICP备
      160322530号-1
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.layout-footer {
  // height: 26vh;
  .footer-info {
    background-color: #000001;
    padding: 30px 67px;
    .split-line {
      height: 90px;
      width: 0;
      border-left: 1px solid #7b7b7c;
      margin-top: 40px;
    }
  }
}
</style>