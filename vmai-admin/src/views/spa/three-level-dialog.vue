<template>
  <el-dialog title="添加三级菜单" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" label-position="right" :rules="rules" label-width="80px" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item label="一级菜单" prop="oneLevel">
            <el-select v-model="form.oneLevel" placeholder="请选择一级菜单" @change="selectLevel(form.oneLevel)">
              <el-option v-for="item in oneLevelOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="二级菜单" prop="twoLevel">
            <el-select v-model="form.twoLevel" placeholder="请选择二级菜单">
              <el-option v-for="item in twoLevelOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
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

        <!-- <el-col :span="12">
          <el-form-item label="显示时间" prop="date">
            <el-date-picker v-model="form.date" type="datetime" placeholder="选择显示时间"> </el-date-picker>
          </el-form-item>
        </el-col> -->
        <el-col :span="12">
          <el-form-item label="呈现模式" prop="layout">
            <el-select v-model="form.layout" placeholder="选择呈现模式">
              <el-option v-for="item in displayModes" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
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
import { categoryList, categoryAdd } from '@/api'
import Enum from '../enum'
import SelectMixin from './select-mixin'
export default {
  mixins: [SelectMixin],
  data() {
    return {
      dialogVisible: false,
      modalData: '',

      displayModes: Object.keys(Enum.displayModes).map((item, index) => ({ key: item, value: Enum.displayModes[item] })),
      resolve: null,
      reject: null,
      form: {
        oneLevel: '',
        twoLevel: '',
        name: '',
        chTitle: '',
        enTitle: '',
        weight: '',
        // date: '',
        layout: ''
      },
      rules: {
        oneLevel: [{ required: true, message: '请输入一级菜单', trigger: 'change' }],
        twoLevel: [{ required: true, message: '请输入二级菜单', trigger: 'change' }],
        name: [{ required: true, message: '请输入模块名', trigger: 'blur' }],
        weight: [{ required: true, message: '请输入权重', trigger: 'blur' }],
        chTitle: [{ required: true, message: '请输入中文标题', trigger: 'blur' }],
        enTitle: [{ required: true, message: '请输入英文标题', trigger: 'blur' }],
        layout: [{ required: true, message: '请输入呈现模式', trigger: 'blur' }]
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
