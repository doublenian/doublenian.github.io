<template>
  <div class=" w-full px-10 mt-12">
    <avue-crud :option="tableOption" :data="list" v-model="obj" :page.sync="page" @on-load="onLoad">
      <template slot="thumbnail" slot-scope="{ row }">
        <img :src="row.thumbnail" alt="" />
      </template>
      <template slot-scope="{ type, size }" slot="menu">
        <el-button :size="size" :type="type">下架</el-button>
      </template>
      <template slot="menuLeft">
        <el-button type="primary" @click="addBanner">新增轮播</el-button>
      </template>
    </avue-crud>
    <confirm-dialog ref="confirmDialog"></confirm-dialog>
  </div>
</template>

<script>
import ConfirmDialog from './confirm-dialog'
export default {
  components: {
    ConfirmDialog
  },
  data() {
    return {
      list: [],
      obj: {},
      page: {
        pageSize: 10
      },
      tableOption: {
        border: true,
        addBtn: false,
        delBtn: false,
        editBtn: false,
        header: true,
        addBtnText: '新增轮播',
        dialogFullscreen: false,
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
    addBanner() {
      this.$refs.confirmDialog
        .show('这是一段文字', 'add')
        .then(ret => {
          console.log(ret)
        })
        .catch(ret => {
          console.log(ret)
        })
    },
    onLoad(page) {
      console.log(page)
      this.page.total = 200
      console.log(this.page.currentPage)
    }
  }
}
</script>