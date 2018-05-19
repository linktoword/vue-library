<template>
<div>
  <mu-tabs :value= "activeTab" @change= "handleTabChange">
    <mu-tab value="tab1" title="推荐"/>
    <mu-tab value="tab2" title="分类"/>
    <mu-tab value="tab3" title="排行"/>
    <mu-tab  icon="search" disabled/>
  </mu-tabs>
    <!-- 推荐显示模块  tab1 -->
  <div v-if= "activeTab === 'tab1'">
    <!-- 推荐显示组件 -->
    <recommend-top></recommend-top>
  </div>

  <div v-if= "activeTab === 'tab2'">
    <!-- 分类展示组件 -->
    <home-sort></home-sort>
  </div>
  <div v-if= "activeTab === 'tab3'">
    <home-ranking></home-ranking>

  </div>
</div>
</template>

<script>
import RecommendTop from './Home/recommend.vue'
import HomeSort from './Home/sort.vue'
import HomeRanking from './Home/HomeRanking.vue'
export default {
  components: {
    "recommend-top": RecommendTop,
    "home-sort": HomeSort,
    "home-ranking": HomeRanking
	},
  data () {
    return {
      activeTab: 'tab1'    
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>