<template>
  <div class="story-wapper">
    <div class="item">
      <img src="/src/assets/Story/story_01.png" alt="">
      <div class="text">追小说</div>
    </div>
    <div class="item">
      <img src="/src/assets/Story/story_02.png" alt="">
      <div class="text">找小说</div>     
    </div>
    <div class="item">
      <img src="/src/assets/Story/story_03.png" alt="">
      <div class="text">排行榜</div>      
    </div>
  </div>
</template>
<style scoped>
  .story-wapper {
    height: 300px;
    /* border: 1px solid red; */
    display: flex;
  }
  .story-wapper .item {
    flex: auto;
    display: flex;
    flex-direction: column;

    /* 垂直水平居中 */
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */

  }
  .story-wapper .item img {
    border-radius: 50%;
  }

  .story-wapper .item .text {
    font-size: 35px;
  }
</style>
