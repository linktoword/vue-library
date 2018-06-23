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
.wapper {
  width: 100%;
}
.wapper .time {
  background: rgb(244, 244, 244);
  font-size: 1rem;
  padding-left: 1rem;
}

.wapper .content {
  display: flex;
  width: 100%;
  padding: .5rem 0;
}

.wapper .content img {
  width: 10rem;
  height: 6.5rem;
  margin: 0 1rem 0 .3rem;
  border-radius: 10px;
}

.wapper .content .text {
  width: 100%;
  display: flex;
  flex-flow: column;
  /* align-items:  */
  font-size: 1rem;
  justify-content: space-between;
  font-weight: bold;
  letter-spacing: 1px;
  position: relative;
}

/* .wapper .content .text .title {
  position: absolute;
  right: 0;
  top: 0;
} */

.wapper .content .text .bottom {
  display: flex;
  justify-content: space-between;
}

.wapper .content .text .bottom .left {
  display: flex;
  align-items: center;
}

.wapper .content .text .bottom .left img {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  margin-right: 1rem;
}
.wapper .content .text .bottom .left div {
  /* height: 60px;
  line-height: 60px; */
  color: rgb(102, 102, 102);
  font-size: .8rem;
}
.wapper .content .text .bottom .right {
  font-size: 1rem;
  margin-right: 15px;
  color: rgb(153, 153, 153);
}
.wapper .content .text .bottom .right i {
  font-size: 1rem;
}

</style>

