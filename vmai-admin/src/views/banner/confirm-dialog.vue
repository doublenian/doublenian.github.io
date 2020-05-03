<template>
  <el-dialog title="添加Banner" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" label-position="right" label-width="120px" ref="ruleForm">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="PC图片(必传)">
            <image-uploader></image-uploader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机图片(可选)">
            <image-uploader></image-uploader>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="交互方式">
            <el-radio-group v-model="form.behavior">
              <el-radio :label="1">无交互</el-radio>
              <el-radio :label="2">跳转外链</el-radio>
              <el-radio :label="3">跳转内链</el-radio>
              <el-radio :label="4">播放视频</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24" v-if="form.behavior !== 1">
          <el-form-item label="链接地址" prop="link">
            <el-input v-model="link" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="跳转模式" prop="jumpMode">
            <el-select v-model="form.jumpMode" placeholder="请选择跳转模式">
              <el-option v-for="item in jumpModeOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="权重" prop="weight">
            <el-input v-model.number="form.weight" type="number" class=" w-8/12" placeholder="填写权重"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="okHandler">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import ImageUploader from '@/components/uploader/image-uploader'
export default {
  components: {
    ImageUploader
  },
  data() {
    return {
      dialogVisible: false,
      modalData: '',
      behavior: 1,
      link: '',
      jumpMode: '',
      weight: '',
      resolve: null,
      reject: null,
      jumpModeOptions: [
        {
          label: '新页面',
          value: 1
        },
        {
          label: '当前页面',
          value: 2
        }
      ],
      form: {
        behavior: '',
        jumpMode: '',
        weight: '',
        link: ''
      }
    }
  },
  methods: {
    show(data, type = 'add') {
      this.dialogVisible = true
      console.log(type)
      if (type == 'add') {
        this.$nextTick(() => {
          this.$refs.ruleForm.resetFields()
        })
      } else {
        this.modalData = data
      }
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    close() {
      this.dialogVisible = false
      this.reject('取消')
    },
    okHandler() {
      this.dialogVisible = false
      this.resolve('确定')
    }
  }
}
</script>

<style lang="less" scoped>
</style>