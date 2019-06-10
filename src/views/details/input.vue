<template>
  <div class="input">
    <el-input
      placeholder="昵称"
      class="name"
      v-model="name"
      clearable/>

    <el-input
      placeholder="联系方式，方便联您，不会公开(可选)"
      class="contact"
      v-model="contact"
      clearable/>

    <el-input
      type="textarea"
      :rows="4"
      placeholder="请输入内容"
      class="content"
      v-model="content"/>

    <div class="tip">{{tip}}</div>

    <div class="submit" @click="submit">评论</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      contact: '',
      content: '',
      tip: ''
    }
  },
  methods: {
    submit () {
      if (!this.name || !this.content) {
        this.tip = '昵称和评论内容不能为空'
        return
      }

      this.$message.info('没有评论api')
    }
  }
}
</script>

<style lang="stylus" scoped>
.input
  overflow hidden
  >>>
    .el-input__inner:focus
    .el-input__inner:hover
    .el-textarea__inner:focus
    .el-textarea__inner:hover
      border-color #DCDFE6
    .el-textarea__inner
      resize none
  .contact
  .content
    margin-top 10px
  .tip
    color $btn-red
    margin-top 20px
    float left
  .submit
    background-color $btn-blue
    color #fff
    text-align center
    display inline-block
    padding 7px 14px
    border-radius 3px
    float right
    margin-top 10px
    cursor pointer
    transition background-color .3s
    &:hover
      background-color $btn-blue + 20%
</style>
