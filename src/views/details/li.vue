<template>
  <div class="li">
    <!-- 头像 -->
    <div class="img" :style="{ backgroundColor: hex() }">{{item.name[0]}}</div>

    <div class="info">
      <div class="name">{{item.name}}</div>

      <div class="time">{{item.create_time | time}}</div>

      <div class="content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import { hex } from '@/utils'

export default {
  props: ['item'],
  methods: {
    hex
  }
}
</script>

<style lang="stylus" scoped>
.li
  position relative
  padding-left 70px
  color #333
  margin-bottom 15px
  font-size 14px
  .img
    position absolute
    left 10px
    top 0
    width 50px
    height 50px
    color #fff
    text-align center
    line-height 50px
    border-radius 50%
    font-size 16px
  .info
    .name
      padding-top 5px
    .time
      font-size 12px
      color #999
</style>
