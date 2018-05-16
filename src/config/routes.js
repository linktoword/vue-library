import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入创建的页面
import Home from '../Home.vue'  //  ../ 父级目录  /根目录  ./当前目录
import Explorer from '../Explorer.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'
import Main from '../Main.vue'
import BookDetail from '../BookDetail.vue'

// 使用路由实例插件
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',  //路由的模式
    base: __dirname, //基路径 在HTML5history模式下使用base选项后 所有的to属性都不需要写基路径
    linkActiveClass: "active", //点击一个vlink触发选中class
    routes: [
      // 将页面组件与 path 指定的路由关联
      {
        name: 'Main',
        path: "/",
        component: Main,
        children: [
           {
             name: 'Home', //路由的名字 使用时引用名字即可 
             path: 'home', //对应路径地址
             component: Home //和路由相关联的组件
           }, {
             name: 'Explorer',
             path: 'Explorer',
             component: Explorer
           }, {
             name: 'Cart',
             path: 'Cart',
             component: Cart
           }, {
             name: 'Me',
             path: 'Me',
             component: Me
           }
        ]
      },
      {
        name: 'BookDetail', path:'/books/:id', component: BookDetail
      }
     
    ] 
});
