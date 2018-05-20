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
    <!-- home页排行榜组件 -->
    <home-ranking :Rankings= "Rankings"></home-ranking>

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
      activeTab: 'tab1' ,

      // home页排行榜数据
      Rankings: [
        {
          url: '/src/assets/HomeRanking/Ranking_01.png',
          title: '猪不上我！',
          author: '川中康嗣',
          label: '欢乐向/爱情',
          time: '2018-05-16',
          id: 1
        },
        {
          url: '/src/assets/HomeRanking/Ranking_02.png',
          title: '不说爱你就会死',
          author: '三生',
          label: '爱情/欢乐向',
          time: '2018-05-12',
          id: 2
        },
        {
          url: '/src/assets/HomeRanking/Ranking_03.png',
          title: '好比是最终迷宫爱的主打歌',
          author: '三生',
          label: '冒险/魔法/轻小说',
          time: '2018-05-16',
          id: 3
        },
        {
          url: '/src/assets/HomeRanking/Ranking_04.png',
          title: '东京都立咒术高手',
          author: '三生',
          label: '校园/魔法',
          time: '2018-05-14',
          id: 4
        },
        {
          url: '/src/assets/HomeRanking/Ranking_05.png',
          title: '白雪小姐是上门女仆',
          author: '三生',
          label: '节操/生活',
          time: '2018-05-13',
          id: 5
        }
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