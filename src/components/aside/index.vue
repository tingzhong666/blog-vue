<template>
  <div class="aside" :style="{ height: height }">
    <!-- 目录/信息切换 -->
    <transition name="trans" mode="out-in">
      <div class="switch" v-if="tree.length">
        <a class="a" :class="{ active: active === '文章目录' }" @click="active = '文章目录'">文章目录</a>
        |
        <a class="a" :class="{ active: active === '博主信息' }" @click="active = '博主信息'">博主信息</a>
      </div>
    </transition>

    <transition name="trans" mode="out-in">
      <component :is="view" class="main"></component>
    </transition>

    <!-- 关闭按钮 -->
    <div class="close" @click="close">
      <div class="line" ref="line1"></div>
      <div class="line" ref="line2"></div>
      <div class="dian" ref="dian"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Info from './info'
import Tree from './tree/index'

export default {
  data () {
    return {
      window,
      active: '博主信息',
      height: window.innerHeight + 'px'
    }
  },
  watch: {
    tree (newV, oldV) {
      this.active = newV.length ? '文章目录' : '博主信息'
    }
  },
  computed: {
    ...mapState(['info', 'tree']),
    view () {
      let v
      switch (this.active) {
        case '文章目录':
          v = 'Tree'
          break
        case '博主信息':
          v = 'Info'
          break
      }

      return v
    }
  },
  components: {
    Info,
    Tree
  },
  methods: {
    ...mapMutations(['setAsideAnimeDom']),
    ...mapActions(['asideAnimeClose']),
    close () {
      this.asideAnimeClose()
    },
    onHeight () {
      this.height = window.innerHeight + 'px'
    }
  },
  created () {
    window.addEventListener('resize', this.onHeight)
  },
  mounted () {
    const { line1, line2, dian } = this.$refs
    this.setAsideAnimeDom({ line1, line2, dian })
  }
}
</script>

<style lang="stylus" scoped>
.aside
  background-color $black
  color $ash2
  padding 20px 10px 20px
  font-weight 700
  position relative
  overflow auto
  .switch
    color #fff
    text-align center
    margin-bottom 20px
  .main
    margin-bottom 30px
  .close
    position absolute
    top 10px
    left 10px
    width 20px
    height 22px
    cursor pointer
    .line
      height 3px
      width 15px
      background-color #fff
      &:first-child
        transform-origin left bottom
        transform rotateZ(38deg)
      &:nth-child(2)
        margin-top 17px
        transform-origin left top
        transform rotateZ(-38deg)
    .dian
      background-color #fff
      width 3px
      height 3px
      border-radius 50%
      position absolute
      top 10.5px
      left 11.9px
  >>> a
    color $ash2
    transition all 0.4s
    cursor pointer
    text-decoration-line none
    &:hover, &.active
      color #fff
</style>
