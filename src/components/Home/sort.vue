<template>
  <div class="sort-warpper">

        <!-- 循环体 -->
        <div class="sort-list-item" v-for="sortList in sortLists" :key="sortList.id">
          <img :src="sortList.url">
          <div>{{sortList.title}}</div>
        </div> 

  </div>
</template>

<script>
  export default {
    data() {
      return {
        sortLists: [
          {
            url: '/src/assets/Sort/sort_01.png',
            title: '少女漫',
            id: 1
          },
          {
            url: '/src/assets/Sort/sort_02.png',
            title: '少男漫',
            id: 2
          },
          {
            url: '/src/assets/Sort/sort_03.png',
            title: '青年漫',
            id: 3
          },
          {
            url: '/src/assets/Sort/sort_04.png',
            title: '女青漫',
            id: 4
          },
          {
            url: '/src/assets/Sort/sort_05.png',
            title: '国漫',
            id: 5
          },
          {
            url: '/src/assets/Sort/sort_06.png',
            title: '日本',
            id: 6
          },
          {
            url: '/src/assets/Sort/sort_07.png',
            title: '韩国',
            id: 7
          },
          {
            url: '/src/assets/Sort/sort_08.png',
            title: '欧美',
            id: 8
          },
          {
            url: '/src/assets/Sort/sort_09.png',
            title: '连载',
            id: 9
          },
          {
            url: '/src/assets/Sort/sort_10.png',
            title: '完结',
            id: 10
          },
          {
            url: '/src/assets/Sort/sort_11.png',
            title: '冒险',
            id: 11
          },
          {
            url: '/src/assets/Sort/sort_12.png',
            title: '伪娘',
            id: 12
          },
          {
            url: '/src/assets/Sort/sort_13.png',
            title: '仙侠',
            id: 13
          },
          {
            url: '/src/assets/Sort/sort_14.png',
            title: '校园',
            id: 14
          },
          {
            url: '/src/assets/Sort/sort_15.png',
            title: '格斗',
            id: 15
          },
          {
            url: '/src/assets/Sort/sort_16.png',
            title: '爱情',
            id: 16
          },
          {
            url: '/src/assets/Sort/sort_17.png',
            title: '悬疑',
            id: 17
          },
          {
            url: '/src/assets/Sort/sort_18.png',
            title: '美食',
            id: 18
          }
        ]
      }
    } 
  }

</script>

<style scoped>
.sort-warpper {
  display: flex;
  flex-flow: row wrap;
}

.sort-warpper .sort-list-item {
  width: 33%;
  flex: 0 1 auto;
  text-align: center;
  padding: .5rem;
  font-size: 1rem;
  /* font-weight: 600; */
}

.sort-warpper .sort-list-item img {
  width: 100%;
  height: auto;
}
</style>
