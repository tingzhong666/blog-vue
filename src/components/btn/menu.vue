<template>
  <div class="btn" @click="asideAnimeOpen">
    <Btn>
      <Menu class="menu"/>
    </Btn>
  </div>
</template>

<script>
import Btn from './btn'
import Menu from '@/components/menu'
import { mapActions } from 'vuex'

export default {
  components: {
    Btn,
    Menu
  },
  computed: {
  },
  methods: {
    ...mapActions(['asideAnimeOpen'])
  }
}
</script>

<style lang="stylus" scoped>
.btn
  >>> .menu
    margin-top 19px
    margin-left 15px
</style>
