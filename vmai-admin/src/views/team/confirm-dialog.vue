<template>
  <el-dialog title="添加人物" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" label-position="right" :rules="rules" label-width="120px" ref="ruleForm">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="名字">
            <el-input v-model="form.name" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="图片" prop="mdImage">
            <image-uploader :url.sync="form.mdImage"></image-uploader>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="职位" prop="titleZh">
            <el-input v-model="form.titleZh" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="描述" prop="contentZh">
            <el-input v-model="form.contentZh" class=" w-11/12" type="textarea"></el-input>
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
      resolve: null,
      reject: null,
      form: {
        name: '',
        mdImage: '',
        weight: '',
        titleZh: '',
        contentZh: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        mdImage: [{ required: true, message: '请输入图片', trigger: 'blur' }],
        titleZh: [{ required: true, message: '请输入职位', trigger: 'blur' }],
        contentZh: [{ required: true, message: '请输入描述', trigger: 'blur' }],
        weight: [{ required: true, message: '请输入权重', trigger: 'blur' }]
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
            name: this.form.name,
            type: 3,
            bg: {
              md: this.form.mdImage
            },
            weight: this.form.weight,
            title: {
              zh: this.form.titleZh
            },
            content: {
              zh: this.form.contentZh
            }
          })
          categoryAdd({
            name: this.form.name,
            type: 3,
            bg: {
              md: this.form.mdImage
            },
            weight: this.form.weight,
            title: {
              zh: this.form.titleZh
            },
            content: {
              zh: this.form.contentZh
            }
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