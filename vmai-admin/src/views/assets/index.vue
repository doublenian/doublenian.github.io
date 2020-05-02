<template>
  <div class=" w-full px-10 mt-12">
    <div class="mb-5">
      <el-radio-group v-model="category">
        <el-radio-button label="所有"></el-radio-button>
        <el-radio-button label="图片"></el-radio-button>
        <el-radio-button label="视频"></el-radio-button>
      </el-radio-group>
    </div>
    <avue-crud :option="tableOption" :data="tableData" v-model="obj">
      <template slot="menuLeft">
        <el-button type="primary" plain>批量下载</el-button>
        <el-button type="warning" plain>新增素材</el-button>
      </template>
      <template slot="thumbnail" slot-scope="{ row }">
        <img :src="row.thumbnail" alt="" />
      </template>
    </avue-crud>
  </div>
</template>

<script>
import tableData from './tableData'
export default {
  data() {
    return {
      category: '所有',
      tableData,
      obj: {},
      tableOption: {
        border: true,
        addBtn: false,
        delBtn: false,
        editBtn: false,
        viewBtn: true,
        header: true,
        menuWidth: 100,
        align: 'center',
        selection: true,
        selectionWidth: 100,
        simplePage: true,
        column: [
          {
            label: '图片',
            prop: 'thumbnail',
            slot: true,
            width: '100px'
          },
          {
            label: '类型',
            prop: 'type'
          },
          {
            label: '超链',
            prop: 'link',
            type: 'url'
          },
          {
            label: '上传时间',
            prop: 'time'
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>