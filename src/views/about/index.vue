<template>
  <div class="index">
    <div class="container">
      <el-card>
        <div class="title">关于</div>

        <Md :md="content"/>
      </el-card>
    </div>
  </div>
</template>

<script>
import { about } from '@/api'
import Md from '@/components/md'

export default {
  data () {
    return {
      content: ''
    }
  },
  components: {
    Md
  },
  methods: {
    async get () {
      let res = await about()
      if (!res.code) {
        this.content = res.data
      }
    }
  },
  created () {
    this.get()
  }
}
</script>

<style lang="stylus" scoped>
.index
  .title
    font-size 25px
    font-weight 600
    text-align center
    margin-bottom 20px
</style>
