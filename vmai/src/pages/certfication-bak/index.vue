<template>
  <div class="certfication">
    <div class="header flex justify-center items-center">
      <p class=" text-white text-font-32 font-weight-bold mt-20">荣誉资质</p>
    </div>
    <div class="body mt-2">
      <div class="title-header flex justify-center">
        <div class="title">专.业.资.质</div>
      </div>
      <div class="cert  py-6">
        <div class="flex justify-between">
          <img
            v-for="i in 3"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/专业资质/' + i + '.png')
            "
            alt=""
          />
        </div>
        <div class="flex justify-between mt-4">
          <img
            v-for="i in [4, 5, 6, 7]"
            :key="'zizhi' + i"
            style="width:24%"
            :src="
              require('../../assets/images/certfication/专业资质/' + i + '.png')
            "
            alt=""
          />
        </div>
        <div class="flex justify-between mt-4">
          <img
            v-for="i in [8, 9, 10]"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/专业资质/' + i + '.png')
            "
            alt=""
          />
        </div>
        <div class="flex justify-between mt-4">
          <img
            v-for="i in [11, 12, 13]"
            :key="'zizhi' + i"
            style="width:24%"
            :src="
              require('../../assets/images/certfication/专业资质/' + i + '.png')
            "
            alt=""
          />
        </div>
        <div class="flex justify-between mt-4">
          <img
            v-for="i in [14, 15, 16]"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/专业资质/' + i + '.png')
            "
            alt=""
          />
        </div>
        <div class="flex justify-between mt-4">
          <img
            v-for="i in [17, 18, 19]"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/专业资质/' + i + '.png')
            "
            alt=""
          />
        </div>
        <div class="flex justify-between mt-4">
          <img
            v-for="i in [20, 21]"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/专业资质/' + i + '.png')
            "
            alt=""
          />
        </div>
      </div>
      <div class="title-header flex justify-center mt-4">
        <div class="title">奖.项.荣.誉</div>
      </div>
      <div class="cert  py-6">
        <div class="flex justify-between">
          <img
            v-for="i in 3"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/奖项荣誉/' + i + '.png')
            "
            alt=""
          />
        </div>
        <div class="flex justify-between mt-4">
          <img
            v-for="i in [4, 5, 6]"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/奖项荣誉/' + i + '.png')
            "
            alt=""
          />
        </div>
        <div class="flex justify-between mt-4">
          <img
            v-for="i in [7, 8, 9]"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/奖项荣誉/' + i + '.png')
            "
            alt=""
          />
        </div>
      </div>
      <div class="title-header flex justify-center mt-4">
        <div class="title">标.准.认.证</div>
      </div>
      <div class="cert  py-6">
        <div class="flex justify-between">
          <img
            v-for="i in 3"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/标准认证/' + i + '.png')
            "
            alt=""
          />
        </div>
        <div class="flex justify-between mt-4">
          <img
            v-for="i in [4, 5, 6]"
            :key="'zizhi' + i"
            style="width:32%"
            :src="
              require('../../assets/images/certfication/标准认证/' + i + '.png')
            "
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.certfication {
  background: white;
  .header {
    width: 100%;
    height: 260px;
    background: url('../../assets/images/company-profile/顶部图片.jpg');
    background-size: cover;
    background-position: center;
  }
  .body {
    width: 800px;
    margin: auto;
    color: #333;
    .title-header {
      width: 100%;
      border-bottom: 1px solid orange;
      .title {
        font-size: 18px;
        padding: 10px;
        border-bottom: 4px solid orange;
      }
      .cert {
      }
    }
  }
}
</style>