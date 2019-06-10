<template>
  <div class="tree">
    <Render :list="tree"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Render from './render'

export default {
  computed: {
    ...mapState(['tree'])
  },
  components: {
    Render
  }
}
</script>

<style lang="stylus" scoped>

</style>
