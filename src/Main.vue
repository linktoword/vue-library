<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li>
          <!-- 使用 router-link 指向定义的 path -->
          <router-link :to="{name: 'Home'}">  <!--使用命名路由采用 ：to  -->
            <div><img src="" alt="首页"></div>
            <div>首页</div> 
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Explorer'}">
            <div><img src="" alt="分类"></div>
            <div>分类</div> 
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Cart'}">
            <div><img src="" alt="购物车"></div>
            <div>购物车</div> 
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Me'}">
            <div><img src="" alt="个人"></div>
            <div>个人</div> 
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <!-- 用 router-view 渲染视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
