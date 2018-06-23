<template>
  <div class="per-wapper">
    <div class="button-wapper">
      <div
            v-for= "(tab, index) in tabs"
            :key= "tab"
            :class= "['tab', { active: currentTab === index }]"
            @click= "currentTab = index"        
      >{{ tab }}</div>
    </div>
    <transition name="fade">
      <component :is= "currentTabComponent"></component>
    </transition>
  </div>
</template>

<script>
import MeList from './MeList'
import TabComics from './Comics'
import TabStory from './Story'
import TabNews from './News'
  export default {
    components: {
      'me-list': MeList,
      'tab-comics': TabComics,
      'tab-story': TabStory,
      'tab-news': TabNews 
    },
    data() {
      return {
        tabs: ['漫画', '小说', '新闻'],
        items: ['comics', 'story', 'news'],
        currentTab: 0
      }
    },
    computed: {
    currentTabComponent: function (index) {
      return 'tab-' + this.items[this.currentTab]
    }
  }
  }
</script>

<style scoped>

.button-wapper {
  height: 3rem;
  display: flex;
  margin: 1rem 1rem;
  border: 1px solid rgb(1, 144, 255);
  border-radius: 5px;
  background: #fff;
  
}

.tab {
  flex: auto;
  text-align: center;
  line-height: 3rem;
  color:rgb(1, 144, 255);
  font-size: 1.5rem;
}

.active {
  background: rgb(1, 144, 255);
  color: #fff;
}

.fade-enter-active {
  transition: all .2s ease;
}
.fade-enter {
  transform: translateX(1000px);
}
</style>
