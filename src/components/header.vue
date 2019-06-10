<template>
  <el-container class="header">
    <div class="container">
      <!-- LOGO -->
      <div class="logo">
        <a href="/">TingZhong666</a>
        <div class="line" ref="logoLine"></div>
      </div>

      <!-- 侧边栏打开按钮 -->
      <Menu class="asideOpen" ref="openBtn" @click="menu"/>
    </div>
  </el-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import Menu from '@/components/menu'

export default {
  components: {
    Menu
  },
  methods: {
    ...mapMutations(['setAsideAnimeDom']),
    ...mapActions(['asideAnimeOpen']),
    // 打开侧边栏
    menu () {
      this.asideAnimeOpen()
    }
  },
  mounted () {
    this.setAsideAnimeDom({ openBtn: this.$refs.openBtn.$el })
  }
}
</script>

<style lang="stylus" scoped>
.header
  background-color $ash
  height 60px
  .container
    position relative
    .logo
      font-size 20px
      font-weight 700
      padding 10px
      padding-top 15px
      position relative
      display inline-block
      a
        text-decoration-line none
        color #000
      .line
        position absolute
        bottom 0
        left 50%
        height 3px
        background-color #000
        width 0
        transition width 0.3s, left 0.3s
      &:hover
        .line
          left 0
          width 100%
    .asideOpen
      position absolute
      right 10px
      top 10px
      cursor pointer
      opacity 0
      padding 10px
</style>
