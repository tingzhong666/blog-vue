<template>
  <router-link class="tag" :to="to">
    <i class="iconfont iconbiaoqian"></i>
    {{label}}
  </router-link>
</template>

<script>
export default {
  props: ['label', 'to']
}
</script>

<style lang="stylus" scoped>
.tag
  position relative
  background-color #000
  color #fff
  display inline-block
  margin-left 20px
  font-size 12px
  border-radius 3px
  padding 3px 6px
  cursor pointer
  text-decoration-line none
  transition background-color .3s
  &:hover
    background-color #000 + 30%
  &:hover::after
    border-right-color #000 + 30%
  .iconfont
    font-size 12px
  &::after
    content ''
    position absolute
    left -20.5px
    top 0
    width 0
    height 0
    border 11px solid
    border-color transparent #000 transparent transparent
    transition border-color .3s
</style>
