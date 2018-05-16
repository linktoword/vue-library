<template>
  <div id="app">
      <!-- 用 router-view 渲染视图 -->
      <router-view></router-view>
    <div class="nav">        
          <!-- 使用 router-link 指向定义的 path -->
          <router-link class="nav-item" :to="{name: 'Home'}" tag="div">  <!--使用命名路由采用 ：to  -->
            <img class="picSet" :src="icon[0]" alt="首页">  <!-- tag指定渲染成的标签 -->
            <div>首页</div> 
          </router-link>

          <router-link class="nav-item" :to="{name: 'News'}" tag="div">
            <img class="picSet" :src="icon[1]" alt="新闻">
            <div>新闻</div> 
          </router-link>
        
          <router-link class="nav-item" :to="{name: 'Story'}" tag="div">
            <img class="picSet" :src= "icon[2]" alt="轻小说">
            <div>轻小说</div> 
          </router-link>
        
          <router-link class="nav-item" :to="{name: 'Me'}" tag="div">
            <img class="picSet" :src="icon[3]" alt="个人">
            <div>个人</div> 
          </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: [
        "/src/assets/首页.png",
        "/src/assets/新闻.png",
        "/src/assets/轻小说.png",
        "/src/assets/个人.png"
        ]
    }
  }
  
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.nav {
  display: flex;
  text-align: center;
  color:#bfbfbf;
  position: fixed;
  bottom: 0px;
  width: 100%;
}

.nav-item {
  flex: auto;
}
.nav-item img {
  width: 50%;
  height: 50%;
}
.active{
  color: blue;
  background: skyblue;
}

</style>
