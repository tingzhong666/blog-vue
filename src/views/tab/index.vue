<template>
  <div class="index">
    <div class="title">分类</div>

    <div class="main">
      <Btn
      v-for="item in list"
      :key="item.id"
      :label="item.label"
      :to="'/tablist/' + item.id"
      class="btn"/>
    </div>
  </div>
</template>

<script>
import Btn from './btn'
import { tab } from '@/api'

export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    Btn
  },
  methods: {
    async get () {
      let res = await tab()

      if (!res.code) {
        this.list = res.data
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
  text-align center
  .title
    font-size 24px
    margin-bottom 20px
    color #000
  .main
    .btn
      margin-left 30px
</style>
