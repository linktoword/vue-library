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
    <news-show  :NewsShowLists="NewsShowLists" 
                :time="timeone"
    ></news-show>

    <news-show  :NewsShowLists="NewsShowListsNext" 
                :time="timetwo"
    ></news-show>
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
      activeTab: 'tab1',


      timeone: '5月21日 星期一',
      NewsShowLists: [
        {
          id: 1,
          url: '/src/assets/News/news_01.png',
          title: '丈夫借上百万日元氪手游！妻子怒卖丈夫稀有角色',
          txurl: '/src/assets/News/Newstx_03.png',
          author: '馨夏',
          num: 125
        },
        {
          id: 2,
          url: '/src/assets/News/news_02.png',
          title: '10月番动画《我喜欢的妹妹但不是妹妹》公开宣传图',
          txurl: '/src/assets/News/Newstx_01.png',
          author: '飞飞',
          num: 100
        },
        {
          id: 3,
          url: '/src/assets/News/news_03.png',
          title: '30小时众筹2217万日元的LL水团井盖已安装完成！',
          txurl: '/src/assets/News/Newstx_03.png',
          author: '馨夏',
          num: 129
        }
      ],

      timetwo: '5月20日 星期日',
      NewsShowListsNext: [
        {
          id: 4,
          url: '/src/assets/News/news_04.png',
          title: '“神秘一线小生领衔主演”《棋魂》将拍摄国内真人版',
          txurl: '/src/assets/News/Newstx_03.png',
          author: '馨夏',
          num: 189
        },
        {
          id: 5,
          url: '/src/assets/News/news_05.png',
          title: '石川由依等声优出演！恐怖动画《暗芝居》第六季7月开播',
          txurl: '/src/assets/News/Newstx_01.png',
          author: '飞飞',
          num: 584
        },
        {
          id: 6,
          url: '/src/assets/News/news_06.png',
          title: '给里给气预定？《我家的执事如是说》真人电影化决定',
          txurl: '/src/assets/News/Newstx_03.png',
          author: '馨夏',
          num: 666
        },
        {
          id: 7,
          url: '/src/assets/News/news_07.png',
          title: '最凶黑帮老大当家庭主夫！漫画《极主夫道》正式开始连载',
          txurl: '/src/assets/News/Newstx_01.png',
          author: '馨夏',
          num: 789
        }
      ]
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
