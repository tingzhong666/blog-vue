<template>
  <div class="render">
    <div class="li" v-for="item in list" :key="item.text">
      <div class="father" :class="{ active: item.active }" @click="to(item.top)">{{item.index + ' ' + item.text}}</div>
      <transition name="tree" mode="out-in">
        <render v-if="item.active" :list="item.child" class="son"/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  name: 'render',
  methods: {
    to (toTop) {
      let targets = {
        top: document.body.scrollTop || document.documentElement.scrollTop
      }
      this.anime({
        targets,
        top: toTop,
        easing: 'easeInOutQuint',
        duration: '300',
        update: () => {
          document.documentElement.scrollTop = targets.top + 60
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.render
  .li
    .father
      text-decoration-line underline
      cursor pointer
      transition color .3s
      font-size 14px
      &:hover, &.active
        color #fff
    .son
      padding-left 20px
// 动画过渡
.tree-enter
  transform translateX(20px)
  opacity 0
.tree-enter-active
  transition transform .3s, opacity .3s
</style>
