<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="推荐"/>
    <mu-tab value="tab2" title="分类"/>
    <mu-tab value="tab3" title="排行"/>
    <mu-tab  icon="search" disabled/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
    <!-- 轮播 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in Pic" :key="item.id">
        <img :src= "item.url">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div v-if="activeTab === 'tab2'">
    <h2>Tab Two</h2>
    <p>
      这是第二个 tab
    </p>
  </div>
  <div v-if="activeTab === 'tab3'">
    <h2>Tab Three</h2>
    <p>
      这是第三个 tab
    </p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1',
      //轮播图片路径
      Pic :[
          {url: '/src/assets/1.png', id: 1}, 
          {url: '/src/assets/2.png', id: 2}, 
          {url: '/src/assets/3.png', id: 3}, 
          {url: '/src/assets/4.png', id: 4}
        ]
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>

<style>
/* 轮播样式 */
.el-carousel__item img {
    width: 100%;
    height: 100%;
  }
</style>
