<template>
  <el-upload
    class="avatar-uploader"
    :action="BaseUrl + '/admin/system/upload'"
    :headers="headers"
    name="image"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar object-contain" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>
<script>
import { getToken } from '@/utils/auth'

export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageUrl: {
      get() {
        return this.url
      },
      set(val) {
        this.$emit('update:url', val)
      }
    }
  },
  data() {
    return {
      // imageUrl: '',
      BaseUrl: process.env.VUE_APP_BASE_API,
      headers: {
        Authorization: getToken()
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = 'https://' + res.url
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg'
      const isLt50M = file.size / 1024 / 1024 < 10
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      if (!isLt50M) {
        this.$message.error('上传图片大小不能超过 10MB!')
      }
      return isLt50M
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

