<template>
  <el-container class="index">
    <div class="container">
      <div class="list">
        <Li class="li" v-for="(item, index) in list" :key="index" :item="item"></Li>
      </div>
    </div>

    <!-- 分页 -->
    <div class="page">
      <el-pagination
        :current-page="page"
        background
        layout="prev, pager, next"
        @current-change="change"
        :total="count"/>
    </div>
  </el-container>
</template>

<script>
import { blog } from '@/api'
import Li from './li'

export default {
  data () {
    return {
      page: 1,
      limit: 10,
      count: 0,
      list: []
    }
  },
  components: {
    Li
  },
  methods: {
    async get () {
      let res = await blog({ page: this.page, limit: 10 })

      if (res.code) {
        this.$message({
          type: 'error',
          message: '请求错误返回码不为0',
          showClose: true
        })
        return
      }

      this.list = res.data.list
      this.count = res.data.n
    },
    // 分页点击
    async change (to) {
      this.page = to
      await this.get()
      document.documentElement.scrollTop = 0
    }
  },
  created () {
    this.get()
  }
}
</script>

<style lang="stylus" scoped>
.index
  flex-direction column
  .page
    margin 0 auto
</style>
