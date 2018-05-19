<template>
  <div class="wapper">
    <div class="pic">
      <img src="/src/assets/HomeRanking/Ranking_01.png" alt="">
    </div>
    <div class="text">
      <div class="title">猪不上我！</div>
      <div class="author commond">
        <i class="material-icons">account_circle</i>
        <div>川中康嗣</div>
      </div>
      <div class="label commond">
        <i class="material-icons">loyalty</i>
        <div>欢乐向/爱情</div>
      </div>
      <div class="time commond">
        <i class="material-icons">schedule</i>
        <div>2018-05-16</div>
      </div>
    </div>
    
    <div class="sequence">1</div>
  </div>
</template>

 <script>

 export default {
   data() {
     return {

     }
   }
 }
   
 </script>
 <style scoped>
 .wapper {
   display: flex;
   height: 376px;
   width: 100%;
   position: relative;
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
  background: rgb(255, 75, 75);
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
 
 </style>
 