<template>
  <el-dialog title="添加一级菜单" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" :rules="rules" label-type="right" label-width="80px" ref="ruleForm">
      <el-row :gutter="10">
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
import { categoryAdd } from '@/api'
export default {
  data() {
    return {
      dialogVisible: false,
      modalData: '',
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
        enTitle: [{ required: true, message: '请输入英文标题', trigger: 'blur' }],
        weight: [{ required: true, message: '请输入权重', trigger: 'blur' }],
        type: [{ required: true, message: '请输入菜单位置', trigger: 'change' }]
      },
      form: {
        name: '',
        chTitle: '',
        enTitle: '',
        weight: '',
        type: '',
        level: '',
        parent_id: ''
      },
      cloneData: {}
    }
  },
  mounted() {
    this.cloneData = { ...this.form }
  },
  methods: {
    show(level, obj) {
      console.log('====level====')
      console.log(this.form.level)
      if (obj.type === 'add') {
        this.form = { ...this.cloneData }
      }
      // if(obj.type === 'edit') {
      //   this.form
      // }

      this.form.level = level
      this.dialogVisible = true
      if (this.form.level == 2) {
        this.form.parent_id = obj.row.id
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
            title: {
              en: this.form.enTitle,
              zh: this.form.chTitle
            },
            parent_id: this.form.parent_id,
            type: this.form.type || 0,
            name: this.form.name,
            weight: this.form.weight
          }).then(ret => {
            this.dialogVisible = false
            this.resolve(ret)
          })
        }
      })
    }
  }
}
</script>
