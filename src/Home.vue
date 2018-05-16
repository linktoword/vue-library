<template>
  <!-- <div>首页</div> -->
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in Pic" :key="item">
      <!-- <h3>{{ item }}</h3> -->
      <img :src= item alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item img {
    background-color: #99a9bf;
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default {
    data(){
      return {
        Pic :[
          '/src/assets/1.png', 
          '/src/assets/2.png', 
          '/src/assets/3.png', 
          '/src/assets/4.png'
        ]
      }
    }
    
  }
</script>