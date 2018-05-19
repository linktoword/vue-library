<template>
  <div>
    <div class="wapper" v-for="Ranking in Rankings" :key= "Ranking.id">
      <div class="pic">
        <img :src= "Ranking.url" alt="">
      </div>
      <div class="text">
        <div class="title">{{Ranking.title}}！</div>
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
      <div class="sequence">{{Ranking.id}}</div>
    </div>
  </div>
</template>

 <script>

 export default {
   props: {
     Rankings: Array
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
 