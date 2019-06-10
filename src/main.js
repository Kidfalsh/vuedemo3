import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 有赞组件
import './vantInit'
// 全局样式
import './assets/styles/global.scss'
Vue.config.productionTip = false

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default vm
