<template>
  <news :items="newsItems"></news>
</template>
<script>
  import News from './MeList.vue'
  export default {
    components: {
      'news': News
    },
    data() {
      return {
        newsItems: [
          {
            id: 1,
            url: '/src/assets/Me/me_02.png',
            text: '新闻订阅',
            size: 30
          },
          {
            id: 2,
            url: '/src/assets/Me/me_05.png',
            text: '新闻评论',
            size: 30
          }
        ]
      }
    }
  }
</script>