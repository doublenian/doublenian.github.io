<template>
  <el-dialog title="添加一级菜单" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" label-position="right" label-width="80px" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :span="24">
          <el-form-item label="模块名称" prop="menuName">
            <el-input v-model="form.menuName" class=" w-1/2"></el-input>
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
          <el-form-item label="菜单位置" prop="position">
            <el-select v-model="form.position" placeholder="请选择跳转模式">
              <el-option v-for="item in positionOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
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
export default {
  data() {
    return {
      dialogVisible: false,
      modalData: '',
      positionOptions: [
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
      form: {
        menuName: '',
        chTitle: '',
        enTitle: '',
        weight: '',
        position: ''
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
