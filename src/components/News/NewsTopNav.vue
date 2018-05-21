<template>
<div>
  <mu-tabs :value= "activeTab" @change= "handleTabChange">
    <mu-tab value="tab1" title="推荐"/>
    <mu-tab value="tab2" title="动画情报" @active= "handleActive" />
    <mu-tab value="tab3" title="漫画情报" @active= "handleActive" />
    <mu-tab value="tab4" title="轻小说情报" @active= "handleActive" />    
    <mu-tab value="tab5" title="漫展详情" @active= "handleActive" />   
  </mu-tabs>
  <div v-if= "activeTab === 'tab1'">
    <news-swiper></news-swiper>
    <news-show></news-show>
  </div>

  <div v-if= "activeTab === 'tab2'">
    敬请期待
  </div>

  <div v-if= "activeTab === 'tab3'">
    敬请期待
  </div>
  <div v-if= "activeTab === 'tab4'">
    敬请期待
  </div>
  <div v-if= "activeTab === 'tab5'">
    敬请期待
  </div>
</div>
</template>
<script>
import NewsSwiper from './Swiper.vue'
import NewsShow from './NewsShow.vue'
export default {
  components: {
    'news-swiper': NewsSwiper,
    'news-show': NewsShow
  },
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      alert('敬请期待')
    }
  }
}  
</script>
<style scoped>


</style>
