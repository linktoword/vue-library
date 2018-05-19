<template>
<div>
    <!-- 轮播 -->
    <!-- 饿了吗的轮播插件 -->
    <!-- <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for= "item in Pic" :key= "item.id">
        <img :src= "item.url">
      </el-carousel-item>
    </el-carousel> -->

    <!-- swiper轮播插件 -->
    <home-swiper ></home-swiper>
    

    <!-- 近期必看 -->
    <home-show  :HSlists = "HSlists"
                :icon= "icon"
                :header= "header"
                :showAuthor= "showAuthor"
                class="area"
               
    ></home-show>

    <!-- 火热专题 -->
    <home-show  :HSlists= "hotList"
                :icon= "hotIcon" 
                :header= "hotHeader"
                :showAuthor= "hotShowAuthor" 
                :num= "boxWeight"
                class="area"
    ></home-show>
                
    <!-- 猜你喜欢 -->
    <home-show
                :HSlists= "loveList"
                :icon= "loveIcon" 
                :header= "loveHeader"
                :showAuthor= "loveShowAuthor" 
                :num= "loveBoxWeight"
                class="area"
    ></home-show>
</div>
</template>

<script>
// 导入展示组件 注册成局部组件
import HomeShow from './HomeShow.vue'
import Swiper from './Swiper.vue'

export default {
  components: {
    "home-show" : HomeShow,
    "home-swiper": Swiper    
	},
  data () {
    return {
      activeTab: 'tab1',
      //轮播图片路径
      Pic :[
          {url: '/src/assets/LB/LB_01.jpg', id: 1}, 
          {url: '/src/assets/LB/LB_02.jpg', id: 2}, 
          {url: '/src/assets/LB/LB_03.jpg', id: 3}, 
          {url: '/src/assets/LB/LB_04.jpg', id: 4}
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
            title: '银河系完结漫游指南第5期',
            id: 5
          },
          {
            url:'/src/assets/HOME/HOME_06.png',
            title: '漫画家上岸漫画推荐专题',
            id: 6
          },
          {
            url:'/src/assets/HOME/HOME_07.png',
            title: 'DmzJ二次元游戏安利',
            id: 7
          }

        ],
        //猜你喜欢专题资源
        loveShowAuthor: false,
        loveBoxWeight: 3,
        loveIcon: 'favorite',
        loveHeader: '猜你喜欢',
        loveList: [
          {
            url:'/src/assets/HOME/HOME_08.png',
            title: '空想神曲IDOLING',
            id: 8
          },
          {
            url:'/src/assets/HOME/HOME_09.png',
            title: '武林之王的退隐生活',
            id: 9
          },
          {
            url:'/src/assets/HOME/HOME_10.png',
            title: '画皮师',
            id: 10
          },
          {
            url:'/src/assets/HOME/HOME_11.png',
            title: '哥布林杀手',
            id: 11
          },
          {
            url:'/src/assets/HOME/HOME_12.png',
            title: '狂赌之渊',
            id: 12
          },
          {
            url:'/src/assets/HOME/HOME_13.png',
            title: '宝石之国',
            id: 13
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

/* 使区块间有间隔 */
.area {
  margin: 20px 0;

}


</style>
