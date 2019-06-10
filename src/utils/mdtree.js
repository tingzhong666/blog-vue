// 用于 md 转换为 html 后，生成目录
/**
 * @className String 所有标题标签的共有类名
 * @dom domObject 查询范围，即为 md 转换为 html 后的 dom 对象。默认为 document
 * 调用实例的 create 方法进行创建
 * 实例的 tree 属性为生成的最终目录
 * transTree 为生成的一维目录
 */
export default class Tree {
  constructor (className, dom = document) {
    // 标题标签共有类名 String
    this.className = className
    // 查询范围 dom 对象
    this.dom = dom
    // 标签 dom 数组
    this.tags = this.dom.getElementsByClassName(this.className)
    // 目录过渡容器
    this.transTree = []
    // 目录最终容器
    this.tree = []
  }

  // 生成目录
  create () {
    // 生成一维目录
    this.transition()
    // 生成多为层级目录
    this.recursion()
    // 最后处理一下小细节
    this.handle(this.tree)
    return this.tree
  }

  // 生成一维过渡目录数组
  transition () {
    for (let i = 0; i < this.tags.length; i++) {
      this.transTree.push({
        text: this.tags[i].innerText,
        // 标签等级
        level: this.tags[i].dataset.level * 1,
        top: this.tags[i].offsetTop,
        active: false,
        child: []
      })
    }
  }

  // 最终目录生成逻辑
  recursion () {
    this.transTree.forEach((item, index) => {
      // 第一项，直接添加。
      // 或
      // 与上一个添加项进行比较
      // 当前项标签等级 <= 上一项标签等级
      // 得出，同级关系。直接添加
      if (!index || item.level <= this.tree[this.tree.length - 1].level) {
        // 目录层级
        // item.rank = 1
        this.tree.push(item)
        return
      }

      // 都不是，则为上一项的后代目录
      // 判断隔了多少代
      let n = item.level - this.tree[this.tree.length - 1].level
      // 目录层级
      // item.rank = n + 1
      // 找到他的父目录的 child 索引，并添加
      this.child(n).push(item)
    })
  }

  // 根据隔代祖宗，找到他的父目录的 child 索引
  child (n) {
    let child = this.tree
    for (let i = 0; i < n; i++) {
      child = child[child.length - 1].child
    }
    return child
  }

  // 最后一些小细节处理
  // 生成目录索引 1.1 1.2 这种
  handle (arr, fatherIndex = '') {
    arr.forEach((item, index) => {
      item.index = fatherIndex ? fatherIndex + '.' + (index + 1) : index + 1
      if (item.child.length) {
        this.handle(item.child, item.index)
      }
    })
  }
}
