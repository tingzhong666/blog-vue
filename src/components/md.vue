<template>
  <div>
    <div class="md" v-html="content" ref="md"></div>
  </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
// 代码高亮样式
import 'highlight.js/styles/xcode.css'
// md 基本样式
import '@/assets/css/base.css'
// github md主题
import '@/assets/css/github.css'
import MdTree from '@/utils/mdtree'
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      content: '',
      tree: [],
      transTree: []
    }
  },
  props: ['md'],
  watch: {
    md (newV, oldV) {
      this.transform()
    },
    tree (newV, oldV) {
      this.setTree(this.tree)
    },
    transTree (newV, oldV) {
      this.setTransTree(this.transTree)
    }
  },
  methods: {
    ...mapMutations(['setTree', 'setTransTree']),
    ...mapActions(['asideAnimeOpen']),
    // md 转换
    transform () {
      const render = new marked.Renderer()

      // 为行内代码添加一个类
      render.codespan = function (code) {
        return `<code class="codespan">${code}</code>`
      }

      // 为所有标题标签添加一个相同的类名
      // 并添加一个自定义属性，用于获取标签等级
      render.heading = function (text, level) {
        return `
          <h${level} class="md-title" data-level="${level}">${text}</h${level}>
        `
      }

      this.content = marked(this.md, {
        renderer: render,
        highlight: function (code) {
          return hljs.highlightAuto(code).value
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      })
    },
    // 生成目录
    craeteTree () {
      let tree = new MdTree('md-title', this.$refs.md)
      tree.create()
      this.tree = tree.tree
      this.transTree = tree.transTree
      // 打开侧边栏，显示目录
      this.asideAnimeOpen()
    },
    // 销毁目录
    rmTree () {
      this.setTree([])
      this.setTransTree([])
    },
    // 滚动监听回调
    scrollHandle () {
      if (!this.tree.length) return
      this.currentTitle(this.tree)
    },
    // 获取当前浏览的标题，实现目录实时高亮
    currentTitle (arr) {
      // 当前窗口距网页顶部的距离 与 某一层级目录所有标题距网页顶部的距离 之 差 的 绝对值
      let differences = []
      let docTop = document.body.scrollTop || document.documentElement.scrollTop
      arr.forEach(item => {
        differences.push(Math.abs(docTop - item.top))
      })

      // 绝对值越小，说明距离当前窗口越近。
      // 越近的，就是用户当前浏览的标题
      let current = {
        index: 0,
        difference: differences[0]
      }
      differences.forEach((item, index) => {
        if (item < current.difference) {
          current.index = index
          current.difference = item
        }
      })

      this.setActive(arr)
      arr[current.index].active = true

      // 有子目录的，递归
      arr[current.index].child.length && this.currentTitle(arr[current.index].child)
    },
    // 全部设 active = false
    setActive (arr) {
      arr.forEach(item => {
        item.active = false
        item.child.length && this.setActive(item.child)
      })
    }
  },
  created () {
    this.transform()
  },
  updated () {
    // 生成目录
    this.craeteTree()
  },
  mounted () {
    // 监听滚动，让目录实时高亮
    window.addEventListener('scroll', this.scrollHandle)
  },
  beforeDestroy () {
    // 销毁目录
    this.rmTree()
    // 移除滚动监听器
    window.removeEventListener('scroll', this.scrollHandle)
  }
}
</script>

<style lang="stylus">
// 代码块
pre
  background-color #f8f8f8
  padding 10px 20px
</style>
