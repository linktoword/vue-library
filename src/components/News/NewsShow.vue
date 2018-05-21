<template>

  <div class="wapper" >
    <div class="time">{{time}}</div>
    <div class="content" v-for= "item in NewsShowLists" :key="item.id">
      <img :src= "item.url" alt="">
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="bottom">
          <div class="left">
            <img :src="item.txurl" alt="">
            <div>{{item.author}}</div>
          </div>
          <div class="right">
            <i class="material-icons">thumb_up</i>
            <span>{{item.num}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props:{
      NewsShowLists: Array,
      time: String
      }

  }

</script>

<style scoped>
.wapper .time {
  background: rgb(244, 244, 244);
  height: 85px;
  font-size: 40px;
  line-height: 85px;
  padding-left: 35px;
}

.wapper .content {
  display: flex;
  width: 100%;
  height: 252px;
  margin: 25px 45px 30px 0px;  
}

.wapper .content img {
  width: 360px;
  height: 252px;
  margin: 0 45px 0 15px;
  border-radius: 10px;
}

.wapper .content .text {
  display: flex;
  flex-flow: column;
  font-size: 35px;
  justify-content: space-between;
  font-weight: bold;
  letter-spacing: 1px;
}

.wapper .content .text .bottom {
  display: flex;
  justify-content: space-between;
}

.wapper .content .text .bottom .left {
  display: flex;
  align-items: center;
}

.wapper .content .text .bottom .left img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}
.wapper .content .text .bottom .left div {
  height: 60px;
  line-height: 60px;
  color: rgb(102, 102, 102);
}
.wapper .content .text .bottom .right {
  font-size: 40px;
  margin-right: 15px;
  color: rgb(153, 153, 153);
}
.wapper .content .text .bottom .right i {
  font-size: 40px;
}

</style>

