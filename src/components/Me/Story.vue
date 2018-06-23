<template>
  <story :items="storyItems"></story>
</template>
<script>
  import story from './MeList.vue'
  export default {
    components: {
      'story': story
    },
    data() {
      return {
        storyItems: [
          {
            id: 1,
            url: '/src/assets/Me/me_02.png',
            text: '小说订阅',
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
            text: '小说下载',
            size: 30
          },
          {
            id: 4,
            url: '/src/assets/Me/me_05.png',
            text: '小说评论',
            size: 30
          }
        ]
      }
    }
  }
</script>