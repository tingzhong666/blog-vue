<template>
  <el-card class="li" shadow="always">
    <div class="title">
      <img :src="item.img" class="img">
      <router-link :to="'/details/' + item.id">{{item.title}}</router-link>
    </div>

    <!-- info -->
    <div class="info">
      <div class="time">
        <i class="iconfont iconfabiaoanli-"></i>
        发表于{{item.created_time | time}}
      </div>
      <span>|</span>
      <div class="read">
        <i class="iconfont iconliulanliang"></i>
        阅读人数{{item.read}}
      </div>
    </div>

    <!-- 分类/标签 -->
    <div class="tab">
      <Tag v-for="v in item.tab" :key="v.id" :label="v.label" :to="'/tablist/' + v.id"/>
    </div>

    <!-- 简介 -->
    <div class="intro">{{item.intro}}</div>

    <!-- 阅读全文 -->
    <div class="link">
      <router-link class="btn" :to="'/details/' + item.id">阅读全文 >></router-link>
    </div>

    <div class="line"></div>
  </el-card>
</template>

<script>
import Tag from '@/components/tag'

export default {
  props: ['item'],
  components: {
    Tag
  }
}
</script>

<style lang="stylus" scoped>
.li
  margin 40px 0
  .title
    text-align center
    font-size 20px
    position relative
    .img
      width 100%
    a
      text-decoration-line none
      color #fff
      position absolute
      top 50%
      left 50%
      transform translate3d(-50%, -50%, 0)
      font-size 40px
      font-weight 600
      &:hover::after
        width 110%
        left -5%
      &::after
        content ''
        display block
        width 0
        height 3px
        background-color #fff
        position absolute
        bottom -3px
        left 50%
        transition width .3s, left .3s
  .info
    font-size 12px
    text-align center
    margin-top 10px
    .iconfont
      color #000
      transform translateY(1px)
      display inline-block
    .time
      color #00a7e0
      display inline-block
    .read
      color #ff3f1a
      display inline-block
    span
      color #bbb
      font-weight 700
      margin 0 5px
  .intro
    color #666
    text-align center
    margin-top 40px
  .tab
    margin-top 20px
    text-align center
  .link
    margin-top 10px
    padding-top 20px
    text-align center
    .btn
      color #000
      text-decoration-line none
      font-weight 600
      font-size 14px
      position relative
      width 100px
      height 30px
      display inline-block
      line-height 30px
      transition background-color .3s, color .3s
      &:hover
        background-color #000
        color #fff
      &:hover::after
        left 50%
        width 0
      &::after
        content ''
        width 90%
        height 2px
        background-color #000
        position absolute
        bottom 0
        left 5%
        transition width .1s, left .1s
  .line
    background-color #ccc
    height 1px
    width 40%
    margin 60px auto 0
</style>
