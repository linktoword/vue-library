<template>
  <div class="wapper">
    <div class="time">5月20日 星期日</div>
    <div class="content">
      <img src="/src/assets/News/news_01.png" alt="">
      <div class="text">
        <div class="title">丈夫借上百万日元氪手游！妻子怒卖丈夫稀有角色</div>
        <div class="bottom">
          <div class="left">
            <img src="/src/assets/News/Newstx_03.png" alt="">
            <div>夏息</div>
          </div>
          <div class="right">
            <i class="material-icons">thumb_up</i>
            <span>125</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

