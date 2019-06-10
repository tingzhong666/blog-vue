<template>
  <router-link class="btn" :to="to">
    {{label}}
  </router-link>
</template>

<script>
export default {
  props: ['label', 'to']
}
</script>

<style lang="stylus" scoped>
.btn
  text-decoration-line none
  color $black
  position relative
  margin-left 10px
  &::after
    height 2px
    position absolute
    width 110%
    left -5%
    bottom -5px
    transition width .3s, left .3s
    content ''
    background-color #000
  &:hover::after
    left 50%
    width 0
</style>
