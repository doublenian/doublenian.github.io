<template>
  <el-dialog title="添加Banner" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" label-position="right" :rules="rules" label-width="120px" ref="ruleForm">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="PC图片(必传)" prop="mdImage">
            <image-uploader :url.sync="form.mdImage"></image-uploader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机图片(可选)" prop="smImage">
            <image-uploader :url.sync="form.smImage"></image-uploader>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="交互方式" prop="type">
            <el-radio-group v-model="form.type">
              <el-radio :label="1">无交互</el-radio>
              <el-radio :label="2">跳转外链</el-radio>
              <el-radio :label="3">跳转内链</el-radio>
              <el-radio :label="4">播放视频</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24" v-if="form.type !== 1">
          <el-form-item label="链接地址" prop="link">
            <el-input v-model="form.link" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="跳转模式" prop="target">
            <el-select v-model="form.target" placeholder="请选择跳转模式">
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
import { categoryAdd } from '@/api'
export default {
  components: {
    ImageUploader
  },
  data() {
    return {
      dialogVisible: false,
      modalData: '',
      resolve: null,
      reject: null,
      jumpModeOptions: [
        {
          label: '当前页面',
          value: 0
        },
        {
          label: '新页面',
          value: 1
        }
      ],
      form: {
        mdImage: '',
        smImage: '',
        type: '',
        weight: '',
        link: '',
        target: ''
      },
      rules: {
        mdImage: [{ required: true, message: '请输入PC图片', trigger: 'blur' }],
        type: [{ required: true, message: '请输入交互方式', trigger: 'blur' }],
        link: [{ required: true, message: '请输入链接地址', trigger: 'blur' }],
        weight: [{ required: true, message: '请输入权重', trigger: 'blur' }],
        target: [{ required: true, message: '请选择跳转模式', trigger: 'blur' }]
      },
      cloneData: {}
    }
  },
  mounted() {
    this.cloneData = { ...this.form }
  },
  methods: {
    show(data, type = 'add') {
      this.dialogVisible = true
      if (type == 'add') {
        this.form = { ...this.cloneData }
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
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log({
            bg: {
              md: this.form.mdImage,
              sm: this.form.smImage
            },
            link: {
              herf: this.form.link,
              target: this.form.target
            },
            type: this.form.type,
            weight: this.form.weight
          })
          categoryAdd({
            name: 'banner',
            bg: {
              md: this.form.mdImage,
              sm: this.form.smImage
            },
            link: {
              herf: this.form.link,
              target: this.form.target
            },
            type: this.form.type,
            weight: this.form.weight
          }).then(ret => {
            this.dialogVisible = false
            this.resolve('确定')
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>