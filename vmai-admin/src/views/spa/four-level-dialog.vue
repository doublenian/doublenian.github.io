<template>
  <el-dialog title="添加四级模块" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" label-position="right" :rules="rules" label-width="120px" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item label="模块名" prop="name">
            <el-input v-model="form.name" class=" w-full"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="权重" prop="weight">
            <el-input v-model.number="form.weight" type="number" class=" w-8/12" placeholder="填写权重"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="中文标题" prop="chTitle">
            <el-input v-model="form.chTitle" class=" w-full"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="英文标题" prop="enTitle">
            <el-input v-model="form.enTitle" class=" w-full"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="中文副标题" prop="chContent">
            <el-input v-model="form.chContent" class=" w-full" type="textarea"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="英文副标题" prop="enContent">
            <el-input v-model="form.enContent" class=" w-full" type="textarea"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="链接" prop="linker">
            <el-input v-model="form.linker" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <!-- <el-col :span="12">
          <el-form-item label="显示时间" prop="date">
            <el-date-picker v-model="form.date" type="datetime" placeholder="选择显示时间"> </el-date-picker>
          </el-form-item>
        </el-col> -->
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
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="okHandler">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { categoryList, categoryAdd, modifyCategory, setState } from '@/api'
import Enum from '../enum'
import SelectMixin from './select-mixin'
import ImageUploader from '@/components/uploader/image-uploader'

export default {
  mixins: [SelectMixin],
  components: {
    ImageUploader
  },
  data() {
    return {
      dialogVisible: false,
      modalData: '',
      opType: '',
      resolve: null,
      reject: null,
      form: {
        id: '',
        name: '',
        weight: 0,
        chTitle: '',
        enTitle: '',
        chContent: '',
        enContent: '',
        mdImage: '',
        smImage: '',
        parent_id: '',
        linker: ''
      },
      rules: {
        mdImage: [{ required: true, message: '请输入PC图片', trigger: 'blur' }]
      },
      cloneData: {}
    }
  },
  async mounted() {
    this.cloneData = { ...this.form }
    this.oneLevelOptions = await this.getOneLevels()
  },
  methods: {
    show(data, type = 'add') {
      this.dialogVisible = true
      this.opType = type
      if (type == 'add') {
        this.form = { ...this.cloneData }
        this.form.parent_id = data.parent_id
      } else {
        console.log('====edit four====')
        console.log(data.row.id)
        this.form = {
          id: data.row.id,
          name: data.row.name,
          weight: data.row.weight,
          chTitle: data.row.title.zh,
          enTitle: data.row.title.en,
          chContent: data.row.content.zh,
          enContent: data.row.content.en,
          mdImage: data.row.bg.md,
          smImage: data.row.bg.sm,
          linker: data.row.link.herf
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
            title: {
              en: this.form.enTitle,
              zh: this.form.chTitle
            },
            content: {
              en: this.form.enContent,
              zh: this.form.chContent
            },
            bg: {
              md: this.form.mdImage,
              sm: this.form.smImage
            },
            weight: this.form.weight,
            name: this.form.name,
            layer: 4,
            link: {
              herf: this.form.linker
            }
            // parent_id: this.form.parent_id
          }
          if (this.opType === 'add') {
            params['parent_id'] = this.form.parent_id
            categoryAdd(params).then(ret => {
              this.dialogVisible = false
              this.$message.success('四级模块新增成功')
              console.log('=====ret=add==')
              console.log(ret)
              setState(ret.id, 1).then(ret => {
                this.resolve('确定')
              })
            })
          } else {
            modifyCategory(this.form.id, params).then(ret => {
              this.dialogVisible = false
              console.log('=====ret==edit==')
              console.log(ret)
              this.resolve(ret)
            })
          }
        }
      })
    }
  }
}
</script>
