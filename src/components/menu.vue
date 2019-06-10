<template>
  <div class="menu" @click="click">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
  .line
    width 20px
    height 4px
    background-color #000
    border-radius 5px
    &:nth-child(2), &:nth-child(3)
      margin-top 2px
</style>
