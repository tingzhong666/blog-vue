<template>
  <div class="btn">
    <slot/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.btn
  background-color #fff
  width 50px
  height 50px
  border-radius 50%
  text-align center
  line-height 50px
  box-shadow 0 0 5px rgba(0,0,0,.05)
  border 1px solid #eee
  cursor pointer
  color #000
  &:hover
    box-shadow 0 0 5px #ddd
</style>
