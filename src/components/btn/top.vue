<template>
  <div class="top" @click="top">
    <Btn>
      <i class="iconfont iconfanhuidingbu"></i>
    </Btn>
  </div>
</template>

<script>
import Btn from './btn'

export default {
  components: {
    Btn
  },
  methods: {
    top () {
      let targets = {
        top: document.body.scrollTop || document.documentElement.scrollTop
      }
      this.anime({
        targets,
        top: 0,
        easing: 'easeInOutQuint',
        duration: 300,
        update: () => {
          document.body.scrollTop = targets.top
          document.documentElement.scrollTop = targets.top
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.top
  >>> .iconfont
    font-size 9px
    display block
</style>
