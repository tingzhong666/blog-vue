<template>
  <div class="comments">
    <div class="head">{{list.length}}条评论</div>

    <Li :item="item" v-for="item in list" :key="item.id"/>
  </div>
</template>

<script>
import Li from './li'

export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    Li
  }
}
</script>

<style lang="stylus" scoped>
.comments
  .head
    font-weight 600
    font-size 14px
    border-bottom 1px solid #eee
    padding-bottom 5px
    margin-bottom 5px
</style>
