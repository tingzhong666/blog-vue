<template>
  <el-container id="app">
    <!-- 全局顶部 -->
    <el-header class="header">
      <Header></Header>
    </el-header>

    <el-main>
      <transition name="router" mode="out-in">
        <router-view class="router"></router-view>
      </transition>
    </el-main>

    <!-- 全局底部 -->
    <el-footer height="58" class="footer">
      <Footer></Footer>
    </el-footer>

    <!-- 右边侧边栏 -->
    <div class="aside" :style="{ height: asideHeight + 'px'}" ref="aside">
      <Aside></Aside>
    </div>

    <!-- 全局按钮 返回顶部 / 菜单按钮 -->
    <transition name="opacity" mode="out-in">
      <Btn v-show="top > 60"/>
    </transition>
  </el-container>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Aside from '@/components/aside/index'
import Btn from '@/components/btn/index'
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      top: document.body.scrollTop || document.documentElement.scrollTop
    }
  },
  components: {
    Header,
    Footer,
    Aside,
    Btn
  },
  computed: {
    asideHeight () {
      return document.body.clientHeight
    }
  },
  methods: {
    ...mapActions(['init']),
    ...mapMutations(['setAsideAnimeDom']),
    onScroll () {
      this.top = document.body.scrollTop || document.documentElement.scrollTop
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.setAsideAnimeDom({ aside: this.$refs.aside, main: this.$el })
    window.addEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-size 16px
  color #333
  padding-right 300px
  .header, .footer
    padding 0
  >.aside
    position fixed
    right 0
    top 0
    width 300px
</style>

<style lang="stylus">
@import '~@/assets/fonticon/iconfont.css'

::selection
  background-color #000
  color #fff
body
  margin 0
.container
  max-width 1000px
  width 100%
  margin 0 auto
.router
  min-height 750px
// 路由切换过渡
.router-enter
  transform translateY(-10px)
  opacity 0
.router-enter-active
  transition transform 0.3s,opacity 0.3s
// 全局按钮过渡
.opacity-enter,
.opacity-leave-to
  opacity 0
.opacity-enter-active,
.opacity-leave-active
  transition opacity .3s
</style>
