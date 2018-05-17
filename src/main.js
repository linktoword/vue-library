import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './config/routes'

import TopList from './components/top-list-nav.vue'//引入单文件组件
Vue.component("top-list-nav", TopList) //注册全局组件




Vue.use(ElementUI);






new Vue({
  el: '#app',
  // 将路由实例添加到Vue实例中
  router,
  render: h => h(App)
})
