<template>
  <comics :items="comicsItems"></comics>
</template>
<script>
  import Comics from './MeList.vue'
  export default {
    components: {
      'comics': Comics
    },
    data() {
      return {
        comicsItems: [
          {
            id: 1,
            url: '/src/assets/Me/me_02.png',
            text: '漫画订阅',
            size: 30
          },
          {
            id: 2,
            url: '/src/assets/Me/me_03.png',
            text: '浏览记录',
            size: 30
          },
          {
            id: 3,
            url: '/src/assets/Me/me_04.png',
            text: '漫画下载',
            size: 30
          },
          {
            id: 4,
            url: '/src/assets/Me/me_05.png',
            text: '漫画评论',
            size: 30
          }
        ]
      }
    }
  }
</script>