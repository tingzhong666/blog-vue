<template>
  <div class="index">
    <List
      :list="list"
      :n="n"
      :current-page="page"
      @current-change="change"/>
  </div>
</template>

<script>
import { blog } from '@/api'
import List from '@/components/list/index'

export default {
  data () {
    return {
      list: undefined,
      page: 1,
      n: 0
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  components: {
    List
  },
  methods: {
    async get () {
      let res = await blog({ tabid: this.id, limit: 10, page: this.page })

      if (!res.code) {
        this.list = res.data.list
        this.n = res.data.n
      }
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

</style>
