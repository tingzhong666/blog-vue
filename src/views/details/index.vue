<template>
  <el-container class="index">
    <div class="container">
      <el-card v-show="Object.keys(details).length">
        <!-- 封面 -->
        <img :src="details.img" class="img">

        <!-- 头部 -->
        <Header :details="details"/>

        <!-- 文章 -->
        <Md :md="details.content || ''"/>

        <!-- 赞赏 -->
        <Pay class="pay"/>

        <!-- 上 / 下博文 -->
        <div class="nav_blog">
          <router-link class="prev" :to="'/details/' + prev.id">
            <i class="iconfont iconicon-right"></i>
            {{prev.title}}
          </router-link>

          <router-link class="next" :to="'/details/' + next.id">
            {{next.title}}
            <i class="iconfont iconyoujiankuohao"></i>
          </router-link>
        </div>

        <!-- 评论框 -->
        <Input class="input"/>

        <!-- 评论列表 -->
        <Comments :list="Object.keys(comments).length ? comments : []" class="comments"/>
      </el-card>
    </div>
  </el-container>
</template>

<script>
import { details, comments } from '@/api'
import Header from './header'
import Md from '@/components/md'
import Pay from './pay'
import Input from './input'
import Comments from './comments'

export default {
  data () {
    return {
      details: {},
      comments: []
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    prev () {
      return this.details.prev || {}
    },
    next () {
      return this.details.next || {}
    }
  },
  watch: {
    id (newV, oldV) {
      this.details = {}
      this.comments = []
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.get()
    }
  },
  components: {
    Header,
    Md,
    Pay,
    Input,
    Comments
  },
  methods: {
    Object,
    async get () {
      this.getDetails()
      this.getComments()
    },
    async getDetails () {
      let res = await details(this.id)

      if (!res.code) {
        this.details = res.data
      }
    },
    async getComments () {
      let res = await comments(this.id)

      if (!res.code) {
        this.comments = res.data
      }
    }
  },
  created () {
    this.get()
  }
}
</script>

<style lang="stylus" scoped>
.index
  .img
    width 100%
    margin-bottom 10px
  .pay
    margin-top 20px
  .nav_blog
    margin-top 20px
    padding-top 20px
    overflow hidden
    border-top 1px solid #eee
    a
      text-decoration-line none
      display block
      color #000
      transition color .3s
      &:hover
        color $black + 25%
      &:first-child
        float left
      &:last-child
        float right
  .input
    margin-top 20px
  .comments
    margin-top 20px
</style>
