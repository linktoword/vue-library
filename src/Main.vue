<template>
  <div id="app">
    <div class="tabs">
      <el-row>
        <el-col :span="6">
          <!-- 使用 router-link 指向定义的 path -->
          <router-link :to="{name: 'Home'}">  <!--使用命名路由采用 ：to  -->
            <div><img :src="icon[0]" alt="首页"></div>
            <div>首页</div> 
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link :to="{name: 'News'}">
            <div><img :src="icon[1]" alt="新闻"></div>
            <div>新闻</div> 
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link :to="{name: 'Story'}">
            <div><img :src= "icon[2]" alt="轻小说"></div>
            <div>轻小说</div> 
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link :to="{name: 'Me'}">
            <div><img :src="icon[3]" alt="个人"></div>
            <div>个人</div> 
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <!-- 用 router-view 渲染视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: [
        "/src/assets/首页.svg",
        "/src/assets/新闻.svg",
        "/src/assets/轻小说.svg",
        "/src/assets/个人.svg"
        ]
    }
  }
  
}
</script>

<style scoped>
/* ul,
li {
  list-style: none;
}
a {
    text-decoration: none;
}

#app .tabs ul li {
 display: inline-block;
 text-align: center;

} */

</style>
