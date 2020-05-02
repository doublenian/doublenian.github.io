<template>
  <div class=" w-full px-10 mt-12">
    <avue-crud :option="tableOption" :data="tableData" v-model="obj" :page.sync="page" @on-load="onLoad">
      <template slot="thumbnail" slot-scope="{ row }">
        <img :src="row.thumbnail" alt="" />
      </template>
      <template slot-scope="{ type, size }" slot="menu">
        <el-button :size="size" :type="type">下架</el-button>
      </template>
    </avue-crud>
  </div>
</template>

<script>
import tableData from './tableData'
export default {
  data() {
    return {
      tableData,
      obj: {},
      page: {
        pageSize: 10
      },
      tableOption: {
        border: true,
        addBtn: true,
        delBtn: false,
        editBtn: false,
        header: true,
        menuWidth: 100,
        align: 'center',
        column: [
          {
            label: '图片',
            prop: 'thumbnail',
            slot: true,
            width: '100px'
          },
          {
            label: '权重',
            prop: 'weight',
            width: '100px'
          },
          {
            label: '超链',
            prop: 'link',
            type: 'url'
          },
          {
            label: '上传时间',
            prop: 'time',
            width: '260px'
          },
          {
            label: '状态',
            prop: 'state',
            width: '100px'
          }
        ]
      }
    }
  },
  methods: {
    onLoad(page) {
      console.log(page)
      this.page.total = 200
      console.log(this.page.currentPage)
    }
  }
}
</script>