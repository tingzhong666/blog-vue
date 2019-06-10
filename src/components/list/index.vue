<template>
  <div class="index">
    <div class="container">
      <div v-if="list && list.length">
        <!-- 列表 -->
        <Li v-for="(item, index) in list" :key="index" :item="item"/>

        <!-- 分页 -->
        <div class="page">
          <el-pagination
            :current-page="currentPage"
            background
            layout="prev, pager, next, total"
            @current-change="change"
            :total="n"/>
        </div>
      </div>

      <div v-if="list && !list.length" class="not">
        暂无记录！
      </div>
    </div>
  </div>
</template>

<script>
import Li from './li'

export default {
  props: ['list', 'n', 'current-page'],
  components: {
    Li
  },
  methods: {
    change (current) {
      this.$emit('current-change', current)
    }
  }
}
</script>

<style lang="stylus" scoped>
.index
  .not
    text-align center
    font-weight 600
    font-size 18px
  .page
    margin 20px 0
</style>
