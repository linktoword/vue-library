<template>
<div class="wapper">
  <!-- 搜索栏 -->
  <story-search ></story-search>

  <!-- 占位 -->
  <div class="search-height"></div>

  <!-- 轮播 -->
  <story-swiper></story-swiper>

  <!-- 小说查找 排行栏 -->
  <story-ranking></story-ranking>

  <story-show></story-show>
  
  <div class="zhanwei"></div>
  
</div>


</template>
<style>

</style>

<script scoped>
import Swiper from './components/Story/Swiper'
import Search from './components/Story/Search'
import StoryRanking from './components/Story/StoryRanking'
import StoryShow from './components/Story/StoryShow'
  export default {
    components: {
      'story-swiper': Swiper,
      'story-search': Search ,
      'story-ranking': StoryRanking,
      'story-show': StoryShow
    }

  }
</script>
<style scoped>
/* 搜索栏flex定位  占位 不让下方被遮挡*/
.search-height {
  width: 100%;
  height: 64px;
}
.zhanwei {
  height: 60px;
  width: 100%;
}

</style>
