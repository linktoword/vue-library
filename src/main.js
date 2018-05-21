import Vue from 'vue'
import App from './App.vue'
import router from './config/routes'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);



import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)



// 注册组件区
import TopList from './components/top-list-nav.vue'//引入单文件组件
Vue.component("top-list-nav", TopList) //注册全局组件



// require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)












new Vue({
  el: '#app',
  // 将路由实例添加到Vue实例中
  router,
  render: h => h(App)
})
