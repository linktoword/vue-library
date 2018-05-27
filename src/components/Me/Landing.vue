<template>
  <div class="me-wapper">
    <div class="landing-wapper">
      <div class="liner">

        <!-- 图标栏 -->
        <div class="top">
           <div class="icon-wapper"><mu-icon value="messages" color="#ddd" size="70"></mu-icon></div>
           <div class="icon-wapper"><mu-icon value="settings" color="#ddd" size="70"></mu-icon></div>
        </div>

        <!-- 登陆头像栏 -->
        <div class="main">
          <div><img src="/src/assets/Me/me_01.png" alt=""></div>
          <div class="land-text">请登录</div>
          <div class="land-description">登陆后可以使用漫画订阅、发表评论等，我们还会提醒你订阅的作品有更新哦</div>
        </div>

        
      </div>


    </div>

  </div>
</template>
<style scoped>
.landing-wapper {
  width: 100%;
  height: 680px;
  border: 1px solid blue;
  background-image: url(/src/assets/Me/FMBJ.png);
  background-size: 100% 680px;
}

.liner {
  width: 100%;
  height: 100%;
  background: linear-gradient(to top,rgba(1, 144, 255, .9), transparent);
}

.liner > .top {
  width: 100%;
  height: 135px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.liner > .top > .icon-wapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main img {
  width: 194px;
  height: 194px;
  border-radius: 50%;
  border: 15px solid rgba(255, 252, 252, .6);
}

.main .land-text {
  font-size: 45px;
  color: #fff;
  margin-top: 55px; 
}
.main .land-description {
  color: #fff;
  font-size: 35px;
  width: 840px;
  text-align: center;
  margin-top: 40px;
}
</style>
