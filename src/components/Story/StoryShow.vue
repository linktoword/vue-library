<template>
  <div class="story-show-wapper">
    <home-show 
              :icon= "storyIconOne"
              :header= "storyHeaderOne"
              :HSlists= "storyListsOne">
    </home-show>
     <home-show 
              :icon= "storyIconTwo"
              :header= "storyHeaderTwo"
              :HSlists= "storyListsTwo"
              :showAuthor= "storyShowAuthorTwo">
    </home-show>
     <home-show 
              :icon= "storyIconThree"
              :header= "storyHeaderThree"
              :HSlists= "storyListsThree"
              :showAuthor= "storyShowAuthorThree">
    </home-show>


  </div>
</template>


<script >
export default {
  data() {
    return {
      storyIconOne: 'autorenew',
      storyHeaderOne: '最近更新',
      storyListsOne: [
        {
          id: 11,
          url: '/src/assets/Story/story_11.png',
          title: '恶魔支配者'
        },
        {
          id: 12,
          url: '/src/assets/Story/story_12.png',
          title: '全人类穿越异世界'
        },
        {
          id: 13,
          url: '/src/assets/Story/story_13.png',
          title: '熊熊勇闯异世界'
        }
      ],

      storyIconTwo: 'rotate_right',
      storyHeaderTwo: '动画进行时',
      storyShowAuthorTwo: true,
      storyListsTwo: [
        {
          id: 14,
          url: '/src/assets/Story/story_14.png',
          title: '银河英雄传说',
          author: '田中芳树'
        },
        {
          id: 15,
          url: '/src/assets/Story/story_15.png',
          title: '刀剑神域外传',
          author: '时雨泽惠一'
        },
        {
          id: 16,
          url: '/src/assets/Story/story_16.png',
          title: '妖怪旅馆营业中',
          author: '未发货'
        }
      ],

      storyIconThree: 'visibility',
      storyHeaderThree: '经典必看',
      storyShowAuthorThree: true,
      storyListsThree: [
        {
          id: 17,
          url: '/src/assets/Story/story_17.png',
          title: 'Another',
          author: '聆听行人'
        },
        {
          id: 18,
          url: '/src/assets/Story/story_18.png',
          title: '虫之歌',
          author: '岩井贡平'
        },
        {
          id: 19,
          url: '/src/assets/Story/story_19.png',
          title: '奇幻贵公子',
          author: '小野不由美'
        },
        {
          id: 20,
          url: '/src/assets/Story/story_20.png',
          title: 'GOSICK',
          author: '樱庭一树'
        },
        {
          id: 21,
          url: '/src/assets/Story/story_21.png',
          title: '火之国、风之国',
          author: '是走头'
        },
        {
          id: 22,
          url: '/src/assets/Story/story_22.png',
          title: '黑钢的魔纹修复师',
          author: '西野一贼'
        }
      ]

    }
  }
  
}
</script>
<style scoped>

</style>
