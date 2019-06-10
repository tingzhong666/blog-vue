<template>
  <div class="index">
    <Top class="top"/>
    <transition name="menu" mode="out-in">
      <Menu v-show="!asideIs"/>
    </transition>
  </div>
</template>

<script>
import Top from './top'
import Menu from './menu'
import { mapState } from 'vuex'

export default {
  components: {
    Top,
    Menu
  },
  computed: {
    ...mapState(['asideIs'])
  }
}
</script>

<style lang="stylus" scoped>
.index
  position fixed
  right 50px
  bottom 50px
  .top
    margin-bottom 10px
.menu-enter,
.menu-leave-to
  opacity 0
.menu-enter-active,
.menu-leave-active
  transition opacity .3s
</style>
