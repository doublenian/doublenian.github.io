<template>
  <el-dialog title="添加三级菜单" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form" label-position="right" label-width="80px" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item label="一级菜单" prop="oneLevel">
            <el-select v-model="form.oneLevel" placeholder="请选择一级菜单">
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
          <el-form-item label="模块名" prop="blockName">
            <el-input v-model="form.blockName" class=" w-full"></el-input>
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
          <el-form-item label="显示时间" prop="date">
            <el-date-picker v-model="form.date" type="datetime" placeholder="选择显示时间"> </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="呈现模式" prop="mode">
            <el-select v-model="form.displayModes" placeholder="选择呈现模式">
              <el-option v-for="item in twoLevelOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
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
export default {
  data() {
    return {
      dialogVisible: false,
      modalData: '',
      oneLevelOptions: [],
      twoLevelOptions: [],
      displayModes: [
        {
          label: '横版海报',
          value: 1
        },
        {
          label: '竖版富文本',
          value: 2
        }
      ],
      resolve: null,
      reject: null,
      form: {
        oneLevel: '',
        twoLevel: '',
        blockName: '',
        chTitle: '',
        enTitle: '',
        weight: '',
        date: '',
        displayModes: ''
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
