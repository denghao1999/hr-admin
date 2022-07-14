import router from "./router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import store from '@/store'
// 白名单
const whiteList = ['/login', '/404']
// 强制路由守卫
router.beforeEach((to, from, next) => {
  // to 去哪 from 从哪里来 next 放行
  // 开启进度条效果
  NProgress.start()
  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') {
      // 关闭进度条效果
      NProgress.done()
      // 有token 并且 是在login页面 就直接跳到首页
      next('/')
    } else {
      // 不是的话就直接放行
      next() //放行
    }
  } else {
    // 没有token的时候 whiteList 里面包含的地址都放行
    // 用indexOf也可以，写起来有点麻烦
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 否则就直接跳到 login
      next('/login')
    }
  }
})
// 后置路由守卫
router.afterEach(() => {
  // 关闭进度条效果
  NProgress.done()

})