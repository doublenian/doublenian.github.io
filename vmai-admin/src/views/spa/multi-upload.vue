<template>
  <el-dialog title="批量上传图片" :visible.sync="dialogVisible" width="80%">
    <div>
      <el-upload
        v-if="dialogVisible"
        class="avatar-uploader"
        :action="BaseUrl + '/admin/system/upload'"
        :headers="headers"
        list-type="picture-card"
        name="image"
        :on-remove="onRemove"
        :on-success="handleAvatarSuccess"
        multiple
      >
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="okHandler">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getToken } from '@/utils/auth'
import { categoryAdd, setState } from '@/api'

export default {
  data() {
    return {
      dialogVisible: false,
      resolve: null,
      reject: null,
      imageUrls: [],
      BaseUrl: process.env.VUE_APP_BASE_API,
      headers: {
        Authorization: getToken()
      },
      parent_id: ''
    }
  },
  methods: {
    show(id) {
      this.dialogVisible = true
      this.imageUrls = []
      this.parent_id = id
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    close() {
      this.dialogVisible = false
      this.reject('取消')
    },
    async okHandler() {
      if (this.imageUrls.length == 0) {
        this.$message.error('请至少上传一张图片')
        return
      }
      let promiseArr = this.imageUrls.map(c => {
        return categoryAdd({
          bg: {
            md: c
          },
          parent_id: this.parent_id
        }).then(ret => ret.id)
      })
      let ids = await Promise.all(promiseArr)
      let idsPromiseMap = ids.map(c => {
        return setState(c, 1)
      })

      //
      Promise.all(idsPromiseMap).then(ret => {
        this.$message.success('批量上传成功')
        this.dialogVisible = false
        this.resolve('成功')
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrls.push('https://' + res.url)
    },
    onRemove({ response }) {
      let url = response.url
      let imageUrls = [...this.imageUrls]
      let index = imageUrls.findIndex(c => c == url)
      imageUrls.splice(index, 1)
      this.imageUrls = imageUrls
    }
  }
}
</script>

<style lang="less">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 148px;
  height: 148px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 148px;
  height: 148px;
  line-height: 148px;
  text-align: center;
}
.avatar {
  width: 148px;
  height: 148px;
  display: block;
}
</style> 