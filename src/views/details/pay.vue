<template>
  <div class="pay">
    <div class="tip">如果我的文章对您有帮助！有钱的捧个钱场，没钱的捧个人场，谢谢您！</div>

    <div class="btn" @click="show = !show">赞赏支持</div>

    <transition mode="out-in" name="trans">
      <div v-show="show" class="code">
        <div class="wx">
          <img src="https://tva1.sinaimg.cn/large/007DFXDhgy1g3vuywh3u8j30u0155tb1.jpg">
          微信支付
        </div>

        <div class="zfb">
          <img src="https://tva1.sinaimg.cn/large/007DFXDhgy1g3vuzpa7jgj30q914u761.jpg">
          支付宝支付
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.pay
  text-align center
  .tip
    color #666
    margin-bottom 10px
  .btn
    background-color $btn-red
    color #fff
    width 100px
    margin 0 auto
    border-radius 5px
    font-weight 600
    padding 8px 0
    margin-bottom 10px
    cursor pointer
    transition background-color .3s
    &:hover
      background-color $btn-red + 20%
  .code
    margin 0 auto
    div
      display inline-block
      margin-top 20px
      img
        height 300px
        display block
    .wx
      img
        border 1px solid #22AB39
    .zfb
      margin-left 20px
      img
        border 1px solid #00A0E8
</style>
