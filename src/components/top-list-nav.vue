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
    
    <home-sort></home-sort>

  </div>
  <div v-if= "activeTab === 'tab3'">
    <h2>Tab Three</h2>
    <p>
      这是第三个 tab
    </p>
  </div>
</div>
</template>

<script>
import RecommendTop from './Home/recommend.vue'
import HomeSort from './Home/sort.vue'
export default {
  components: {
    "recommend-top": RecommendTop,
    "home-sort": HomeSort
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