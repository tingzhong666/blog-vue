<template>
  <div class="index">
    <div class="container">
      <el-input
        v-model="input"
        placeholder="输入关键词"
        class="input"
        clearable
        @change="enter"/>

      <List
        :list="list"
        :n="n"
        class="list"
        :current-page="page"
        @current-change="change"/>
    </div>
  </div>
</template>

<script>
import List from '@/components/list/index'
import { search } from '@/api'

export default {
  data () {
    return {
      input: '',
      list: [],
      n: 0,
      page: 1
    }
  },
  computed: {
    q () {
      return this.$route.query.q
    }
  },
  watch: {
    q (newV, oldV) {
      this.get()
    }
  },
  components: {
    List
  },
  methods: {
    async get () {
      if (!this.q) return

      let res = await search({ q: this.q, page: this.page, limit: 10 })

      if (!res.code) {
        this.list = res.data.list
        this.n = res.data.n
      }
    },
    // Enter 按键
    enter () {
      this.$router.push('/search?q=' + this.input)
    },
    // 点击不同分页
    change (current) {
      this.page = current
      this.get()
    }
  },
  created () {
    this.get()
  }
}
</script>

<style lang="stylus" scoped>
.index
  .input
    >>> .el-input__inner:focus
      border-color $black
  .list
    margin-top 20px
</style>
