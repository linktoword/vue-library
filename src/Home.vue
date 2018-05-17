<template>
  <!-- <div>首页</div> -->
  <div>
  <top-list-nav></top-list-nav>
  
  <!-- 轮播插件 -->
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in Pic" :key="item.id">
      <img :src= "item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>
<style>
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default {
    data(){
      return {
        Pic :[
          {url: '/src/assets/1.png', id: 1}, 
          {url: '/src/assets/2.png', id: 2}, 
          {url: '/src/assets/3.png', id: 3}, 
          {url: '/src/assets/4.png', id: 4}
        ]
      }
    }
    
  }
</script>