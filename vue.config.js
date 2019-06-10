let externals = {}
if (process.env.NODE_ENV === 'production') {
  externals = {
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter',
    'element-ui': 'ELEMENT',
    'axios': 'axios',
    'marked': 'marked',
    'highlight.js': 'hljs'
  }
}

module.exports = {
  configureWebpack: {
    externals
  },

  devServer: {
    proxy: {
      // api
      'v1': {
        target: 'http://localhost:8888'
      },
      // 静态资源
      'static': {
        target: 'http://localhost:8888'
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'import': [
          'D:\\web\\projects\\blog-vue\\src\\styl\\var.styl',
          'D:\\web\\projects\\blog-vue\\src\\styl\\trans.styl'
        ]
      }
    }
  },

  publicPath: undefined,
  outputDir: undefined,
  assetsDir: 'public',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
}
