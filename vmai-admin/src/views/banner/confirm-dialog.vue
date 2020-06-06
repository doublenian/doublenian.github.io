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
          <el-form-item label="主标题">
            <el-input v-model="form.title.zh" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="副标题">
            <el-input v-model="form.content.zh" class=" w-11/12" type="textarea"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="交互方式" prop="layout">
            <el-radio-group v-model="form.layout">
              <el-radio :label="item.label" v-for="(item, index) in linkerType" :key="'linker' + index">{{ item.name }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24" v-if="form.layout !== 1">
          <el-form-item label="链接地址" prop="link">
            <el-input v-model="form.link" class=" w-11/12"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="跳转模式" prop="target" v-if="form.layout !== 1">
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
import { categoryAdd, modifyCategory } from '@/api'
import Enum from '../enum'
export default {
  components: {
    ImageUploader
  },
  data() {
    return {
      dialogVisible: false,
      opType: '',
      resolve: null,
      reject: null,
      linkerType: Enum.linkerType,
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
        id: '',
        mdImage: '',
        smImage: '',
        layout: '',
        weight: '',
        link: '',
        target: '',
        title: {
          en: '',
          zh: ''
        },
        content: {
          en: '',
          zh: ''
        }
      },
      rules: {
        mdImage: [{ required: true, message: '请输入PC图片', trigger: 'blur' }],
        layout: [{ required: true, message: '请输入交互方式', trigger: 'blur' }],
        link: [{ required: true, message: '请输入链接地址', trigger: 'blur' }],
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
      this.opType = type
      this.dialogVisible = true
      if (type == 'add') {
        this.form = { ...this.cloneData }
      } else {
        this.form = {
          id: data.id,
          mdImage: data.bg.md,
          smImage: data.bg.sm,
          layout: data.layout,
          weight: data.weight,
          link: data.link.herf,
          target: data.link.target,
          title: {
            en: data.title.en,
            zh: data.title.zh
          },
          content: {
            en: data.title.en,
            zh: data.content.zh
          }
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
            name: 'banner',
            bg: {
              md: this.form.mdImage,
              sm: this.form.smImage
            },
            link: {
              herf: this.form.link,
              target: this.form.target
            },
            type: 4, //表示是Banner
            layout: this.form.layout,
            weight: this.form.weight,
            title: {
              en: this.form.title.en,
              zh: this.form.title.zh
            },
            content: {
              en: this.form.content.en,
              zh: this.form.content.zh
            }
          }
          if (this.opType === 'add') {
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