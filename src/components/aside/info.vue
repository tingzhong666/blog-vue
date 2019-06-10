<template>
  <el-container class="root">
    <!-- 博主信息 -->
    <div class="info">
      <img :src="info.img">

      <div class="name">
        {{info.name}}
      </div>

      <div class="intro">
        {{info.intro}}
      </div>

      <div class="github" @click="window.open(info.github)">
        <i class="iconfont icongithub"></i>
        github
      </div>
    </div>

    <!-- 导航 -->
    <div class="nav">
      <div class="li" v-for="item in nav" :key="item.label">
        <router-link class="a" :to="item.push">
          <i :class="item.fonticon" class="iconfont"></i>
          {{item.label}}
        </router-link>
      </div>
    </div>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      window,
      nav: [
        { label: '首页', push: '/index', fonticon: 'iconshouye' },
        { label: '分类/标签', push: '/tab', fonticon: 'iconbiaoqian' },
        { label: '关于', push: '/about', fonticon: 'iconguanyu' },
        { label: '搜索', push: '/search', fonticon: 'iconsousuo' }
      ]
    }
  },
  computed: {
    ...mapState(['info'])
  }
}
</script>

<style lang="stylus" scoped>
.root
  display block
  .info
    text-align center
    img
      width 100px
      height 100px
      border-radius 50%
      padding 3px
      background-color #fff
    .name
      color #fff
      font-size 20px
      margin 10px
    .intro
      font-size 14px
    .github
      font-weight 400
      color $orange
      border 1px solid $orange
      width 65px
      margin 0 auto
      margin-top 20px
      border-radius 3px
      padding 3px 6px
      cursor pointer
      font-size 14px
      transition all 0.4s ease
      &:hover
        background-color $orange
        color #fff
  .nav
    margin-top 20px
    margin-left 15px
    .li
      margin-bottom 8px
      .iconfont
        font-weight 400
        font-size 14px
</style>
