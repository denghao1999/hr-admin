import Vue from 'vue'
// 第三方css库 ，让不同浏览器标签的样式保持一致
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// 全局注册 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 国际化
import locale from 'element-ui/lib/locale/lang/en' // lang i18n -> 国际化单词简写
// 全局公共样式
import '@/styles/index.scss' // global css

import App from './App' // 跟组件
import store from './store' // Vuex
import router from './router' // 路由

import '@/icons' // icon svg 图标
import '@/permission' // permission control 权限控制

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// mock 假数据
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

//控制台有一个生产的提示
Vue.config.productionTip = false

// 挂载
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
