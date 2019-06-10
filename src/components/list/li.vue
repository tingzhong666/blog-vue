<template>
  <el-card class="li">
    <!-- 标题 -->
    <div class="title">
      <router-link class="a" :to="'/details/' + item.id">{{item.title}}</router-link>
    </div>

    <!-- info -->
    <div class="info">
      <div class="time">
        <i class="iconfont iconfabiaoanli-"></i>
        发表于{{item.created_time | time}}
      </div>
      <span class="line">●</span>
      <div class="read">
        <i class="iconfont iconliulanliang"></i>
        阅读人数{{item.read}}
      </div>
    </div>

    <!-- tabs -->
    <div class="tabs">
      <Tag v-for="v in item.tab" :key="v.id" :label="v.label" :to="'/tablist/' + v.id"/>
    </div>

    <!-- 简介 -->
    <div class="intro">{{item.intro}}</div>
  </el-card>
</template>

<script>
import Tag from '../tag'

export default {
  props: ['item'],
  components: {
    Tag
  }
}
</script>

<style lang="stylus" scoped>
.li
  width 95%
  .title
    font-size 25px
    margin-bottom 5px
    .a
      text-decoration-line none
      color $black
      position relative
      &::after
        width 0
        height 1px
        position absolute
        bottom -2px
        left 50%
        content ''
        background-color #000
        transition width .3s, left .3s
      &:hover::after
        width 110%
        left -5%
  .info
    margin-bottom 10px
    font-size 14px
    .time
      display inline-block
    .read
      display inline-block
    .line
      font-size 12px
      margin 0 5px
  .tabs
    margin-bottom 20px
  .intro
    padding 10px 10px
    border-left 2px solid $black
</style>
