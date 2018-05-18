<template>
<div>
  <mu-tabs :value= "activeTab" @change= "handleTabChange">
    <mu-tab value="tab1" title="推荐"/>
    <mu-tab value="tab2" title="分类"/>
    <mu-tab value="tab3" title="排行"/>
    <mu-tab  icon="search" disabled/>
  </mu-tabs>
  <div v-if= "activeTab === 'tab1'">
    <!-- 轮播 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for= "item in Pic" :key= "item.id">
        <img :src= "item.url">
      </el-carousel-item>
    </el-carousel>

    <!-- 近期必看 -->
    <home-show  :HSlists = "HSlists"
                :icon= "icon"
                :header= "header"
                :showAuthor= "showAuthor"
               
    ></home-show>

    <!-- 火热专题 -->
    <home-show  :HSlists= "hotList"
                :icon= "hotIcon" 
                :header= "hotHeader"
                :showAuthor= "hotShowAuthor" 
                :num= "boxWeight"
    ></home-show>

  </div>

  <div v-if= "activeTab === 'tab2'">
    <h2>Tab Two</h2>
    <p>
      这是第二个 tab
    </p>
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
import HomeShow from './HomeShow2.vue'
export default {
  components: {
		"home-show" : HomeShow
	},
  data () {
    return {
      activeTab: 'tab1',
      //轮播图片路径
      Pic :[
          {url: '/src/assets/1.png', id: 1}, 
          {url: '/src/assets/2.png', id: 2}, 
          {url: '/src/assets/3.png', id: 3}, 
          {url: '/src/assets/4.png', id: 4}
        ],
        // 近期必看栏资源
        showAuthor: true,
        icon: 'face',
        header: '近期必看',
        HSlists: [
          {
            url:'/src/assets/HOME/HOME_01.png',
            title: '血之傲',
            author: '风华',
            id: 1
          },
          {
            url: '/src/assets/HOME/HOME_02.png',
            title: '清之树',
            author: '血月',
            id: 2
          },
          {
            url: '/src/assets/HOME/HOME_03.png',
            title: 'BACK TO HOME',
            author: '雪月',
            id: 3
          }
        ],
        //火热专题资源
        hotShowAuthor: false,
        boxWeight: 2,
        hotIcon: 'stars',
        hotHeader: '火热专题',
        hotList: [
          {
            url:'/src/assets/HOME/HOME_04.png',
            title: '新闻周刊第44期',
            id: 4
          },
          {
            url:'/src/assets/HOME/HOME_05.png',
            title: '血之傲',
            author: '风华',
            id: 5
          },
          {
            url:'/src/assets/HOME/HOME_06.png',
            title: '血之傲',
            author: '风华',
            id: 6
          },
          {
            url:'/src/assets/HOME/HOME_07.png',
            title: '血之傲',
            author: '风华',
            id: 7
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

<style scoped>
/* 轮播样式 */
.el-carousel__item img {
    width: 100%;
    height: 100%;
  }

  home-show {
    margin: 10px 0;

  }


</style>
