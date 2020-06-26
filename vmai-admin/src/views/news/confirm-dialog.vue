<template>
  <el-dialog title="添加新闻" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" label-position="right" :rules="rules" label-width="120px" ref="ruleForm">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="标题">
            <el-input v-model="form.titleZh" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="英文标题">
            <el-input v-model="form.titleEn" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="内容">
            <el-input v-model="form.contentZh" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="英文内容">
            <el-input v-model="form.contentEn" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="链接" prop="linker">
            <el-input v-model="form.linker" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="图片" prop="mdImage">
            <image-uploader :url.sync="form.mdImage"></image-uploader>
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
import { categoryAdd, modifyCategory } from '@/api'
export default {
  components: {
    ImageUploader
  },
  data() {
    return {
      dialogVisible: false,
      resolve: null,
      reject: null,
      opType: '',
      form: {
        mdImage: '',
        weight: 100,
        titleZh: '',
        titleEn: '',
        contentZh: '',
        contentEn: '',
        linker: ''
      },
      rules: {
        mdImage: [{ required: true, message: '请输入图片', trigger: 'blur' }],
        linker: [{ required: true, message: '请填入链接', trigger: 'blur' }]
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
      this.opType = type
      if (type == 'add') {
        this.form = { ...this.cloneData }
      } else {
        this.form = {
          id: data.id,
          mdImage: data.bg.md,
          titleZh: data.title.zh,
          titleEn: data.title.en,
          weight: data.weight,
          contentZh: data.content.zh,
          contentEn: data.content.en,
          linker: data.link.herf
        }
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
          let params = {
            type: 5,
            bg: {
              md: this.form.mdImage
            },
            weight: this.form.weight,
            title: {
              zh: this.form.titleZh,
              en: this.form.titleEn
            },
            content: {
              zh: this.form.contentZh,
              en: this.form.contentEn
            },
            link: {
              herf: this.form.linker
            }
          }
          if (this.opType == 'add') {
            categoryAdd(params).then(ret => {
              this.dialogVisible = false
              this.resolve('确定')
            })
          } else {
            modifyCategory(this.form.id, params).then(ret => {
              this.dialogVisible = false
              this.resolve(ret)
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>