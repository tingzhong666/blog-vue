<template>
  <div class="header">
    <!-- 标题 -->
    <div class="title">{{details.title}}</div>

    <!-- info -->
    <div class="info">
      <div class="time">
        <i class="iconfont iconfabiaoanli-"></i>
        发表于{{details.created_time | time}}
      </div>
      <span class="line">●</span>
      <div class="read">
        <i class="iconfont iconliulanliang"></i>
        阅读人数{{details.read}}
      </div>
    </div>

    <!-- tabs -->
    <div class="tabs">
      <Tag v-for="item in details.tab" :key="item.id" :label="item.label" :to="'/tablist/' + item.id"/>
    </div>

    <!-- 简介 -->
    <div class="intro">{{details.intro}}</div>
  </div>
</template>

<script>
import Tag from '@/components/tag'

export default {
  props: ['details'],
  components: {
    Tag
  }
}
</script>

<style lang="stylus" scoped>
.header
  text-align center
  .title
    font-size 27px
    font-weight 600
    margin-bottom 10px
  .info
    font-size 14px
    margin-bottom 10px
    color #666
    .time
      display inline-block
    .read
      display inline-block
    .line
      margin 0 5px
      font-size 10px
  .tabs
    margin-bottom 10px
  .intro
    color #999
    font-size 14px
</style>
