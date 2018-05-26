<template>
<!-- Home页排行榜组件 -->
  <div class="HR-wapper">
    <div class="HR-top">
      <ul>
        <li>人气排行</li>
        <li>吐槽排行</li>
        <li>订阅排行</li>
      </ul>
    </div>
    <div class="wapper" v-for="(Ranking, index ) in Rankings" :key= "Ranking.id">
      <div class="pic">
        <img :src= "Ranking.url" alt="">
        <!-- <router-link :to="{name: 'BookDetail'}" tag="img" :src= "Ranking.url"></router-link> -->
      </div>
      <div class="text">
        <div class="title">{{Ranking.title}}</div>
        <div class="author commond">
          <i class="material-icons">account_circle</i>
          <div>{{Ranking.author}}</div>
        </div>
        <div class="label commond">
          <i class="material-icons">loyalty</i>
          <div>{{Ranking.label}}</div>
        </div>
        <div class="time commond">
          <i class="material-icons">schedule</i>
          <div>{{Ranking.time}}</div>
        </div>
      </div>
      <div class="sequence" :class="classChange(index)">{{Ranking.id}}</div>
    </div>
  </div>
</template>

 <script>

 export default {
   props: {
     Rankings: Array
   },
   methods: {
     classChange : function(index) {
       return {
         sequenceOne: index === 0 && true,
         sequenceTwo: index === 1 && true,
         sequenceThree: index === 2 && true,
         sequenceFour: index >= 3 && true 
       }
     }
   }
 }
   
 </script>
 <style scoped>
.HR-wapper {
  background: #eee;
}

/* 排行榜切换模块 */
 .HR-wapper .HR-top {
   display: flex;
   flex-flow: row-reverse;
   border-bottom: 1px solid rgb(203, 203, 203);
   background: white;
 }

 .HR-wapper .HR-top ul {
   display: flex;
 }

 .HR-wapper .HR-top ul li {
   list-style: none;
   font-size: 30px;
   border-right: 2px solid rgb(177 , 177, 177);
   padding:  0 10px; 
   color: rgb(102, 102, 102);
 }

 .HR-wapper .HR-top ul li:first-child {
   color: rgb(87, 156, 244);
 }

 .HR-wapper .HR-top ul li:last-child {
   border-right: none;
 }

 /* 排行榜显示模块 */

 .wapper {
   display: flex;
   height: 376px;
   width: 100%;
   position: relative;
   margin-bottom: 10px;
   padding-top: 15px;
   background: white;   
   /* box-shadow: 0 2px 0 10px #eee; */
 }

 .pic,
 .pic img {
   border-radius: 20px;
   margin-left: 20px;
 }
 .title {
   color: rgb(51, 51, 51);
   font-weight: 700;
   font-size: 40px;
   margin-bottom: 10px;
 }

 .wapper .text {
   display: flex;
   flex-flow: column;
   margin: 70px 0 0 60px;
 }

 .wapper .text .title {
   width: 320px;
   text-overflow:ellipsis; /* 表示文本超出用省略号代替 */
   white-space:nowrap;  /* 表示文本不换行 */
   overflow:hidden;   /* 表示超出隐藏 */
 }

 .wapper .text  .commond {
   display: flex;
   align-items: center;
   margin: 0 0 10px 0;
 }
 .wapper .text  .commond i {
      color: rgb(77, 161, 255);
      margin-right: 15px; 
 }
.wapper .text  .commond div {
  font-size: 30px;
  color: rgb(153, 153, 153);
}

.wapper .sequence {
  width: 100px;
  height: 100px;
  /* background: rgb(233, 233, 233); */
  border-bottom-left-radius: 100%;
  text-align: center;
  line-height: 100px;
  color: rgb(255, 255, 255);
  font-size: 50px;
  font-weight: bolder;
  position: absolute;
  top: 0;
  right: 0;
}

.sequenceFour {
  background: rgb(233, 233, 233);
}
.sequenceOne{
  background: rgb(255, 75, 75);
}

.sequenceTwo {
  background: rgb(255, 128, 4);
}

.sequenceThree {
  background: rgb(255, 192, 0);
}

 </style>
