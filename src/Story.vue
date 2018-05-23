<template>
<div class="wapper">
  <story-search ></story-search>
  <div class="search-height"></div>
  <story-swiper></story-swiper>
</div>

</template>
<style>

</style>

<script scoped>
import Swiper from './components/Story/Swiper'
import Search from './components/Story/Search'
  export default {
    components: {
      'story-swiper': Swiper,
      'story-search': Search  
    }

  }
</script>
<style scoped>
/* 搜索栏flex定位  站位 不让下方被遮挡*/
.search-height {
  width: 100%;
  height: 64px;
}

</style>
