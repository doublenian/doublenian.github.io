<template>
  <el-dialog :title="form.level == 1 ? '添加一级菜单' : '子菜单'" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" :rules="rules" label-type="right" label-width="80px" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :span="24">
          <el-form-item label="模块ID">
            <p>{{ this.form.id }}</p>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="模块名称" prop="name">
            <el-input v-model="form.name" class=" w-1/2"></el-input>
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
        <el-col :span="12" v-if="form.level == 1">
          <el-form-item label="菜单位置" prop="type">
            <el-select v-model="form.type" placeholder="请选择菜单位置">
              <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="链接" prop="link">
            <el-input v-model="form.link" type="text" class=" w-8/12" placeholder="填写链接"></el-input>
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
import { categoryAdd, modifyCategory } from '@/api'
export default {
  data() {
    return {
      dialogVisible: false,
      modalData: '',
      opType: '',
      typeOptions: [
        {
          label: '顶部导航栏',
          value: 1
        },
        {
          label: '底部导航栏',
          value: 2
        }
      ],
      resolve: null,
      reject: null,
      rules: {
        name: [{ required: true, message: '请输入模块名称', trigger: 'blur' }],
        chTitle: [{ required: true, message: '请输入中文标题', trigger: 'blur' }],
        weight: [{ required: true, message: '请输入权重', trigger: 'blur' }],
        type: [{ required: true, message: '请输入菜单位置', trigger: 'change' }],
        link: [{ required: true, message: '请输入链接', trigger: 'change' }]
      },
      form: {
        id: '',
        name: '',
        chTitle: '',
        enTitle: '',
        weight: '',
        type: '',
        level: '',
        parent_id: '',
        link: ''
      },
      cloneData: {}
    }
  },
  mounted() {
    this.cloneData = { ...this.form }
  },
  methods: {
    show(level, obj) {
      this.opType = obj.type

      if (obj.type === 'add') {
        this.form = { ...this.cloneData }
        console.log('=====this.form=====')
        console.log(this.form)
      }
      if (obj.type === 'edit') {
        this.form = {
          id: obj.data.id,
          name: obj.data.name,
          chTitle: obj.data.chTitle,
          enTitle: obj.data.enTitle,
          weight: obj.data.weight,
          type: obj.data.type,
          parent_id: obj.data.parent_id,
          link: obj.data.link.herf
        }
      }

      this.dialogVisible = true
      this.form.level = level
      if (level == 2) {
        this.form.parent_id = obj.data.id
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
            link: {
              herf: this.form.link
            },
            parent_id: this.form.parent_id,
            type: this.form.type || 0,
            name: this.form.name,
            weight: this.form.weight
          }
          if (this.opType === 'add') {
            categoryAdd(params).then(ret => {
              this.dialogVisible = false
              this.resolve(ret)
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
