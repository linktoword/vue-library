<template>
  <div class="me-wapper">
    <div class="landing-wapper">
      <div class="liner">

        <!-- 图标栏 -->
        <div class="top">
           <div class="icon-wapper"><mu-icon value="messages" color="#ddd" :size= "size"></mu-icon></div>
           <div class="icon-wapper"><mu-icon value="settings" color="#ddd" :size= "size"></mu-icon></div>
        </div>

        <!-- 登陆头像栏 -->
        <div class="main">
          <div><img src="/src/assets/Me/me_01.png" alt=""></div>
          <div class="land-text">请登录</div>
          <div class="land-description">登陆后可以使用漫画订阅、发表评论等，我们还会提醒你订阅的作品有更新哦</div>
        </div>
      </div>
    </div>
    <me-person></me-person>

  </div>
</template>
<script>
import MePerson from './Person'
  export default {
    components: {
      "me-person": MePerson
    },
    data () {
     return {
        size: 30
     }
    }
  }
</script>

<style scoped>
.landing-wapper {
  width: 100%;
  /* height: 20rem; */
  background-image: url(/src/assets/Me/FMBJ.png);
  background-size: 100% 100%;
}

.liner {
  width: 100%;
  height: 100%;
  background: linear-gradient(to top,rgba(1, 144, 255, .9), transparent);
}

.liner > .top {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.liner > .top > .icon-wapper {
  /* width: 2rem; */
  /* height: 2rem; */
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
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: .5rem solid rgba(255, 252, 252, .6);
}

.main .land-text {
  font-size: 1rem;
  color: #fff;
  margin-top: 1rem; 
}
.main .land-description {
  color: #fff;
  font-size: .8rem;
  /* width: 840px; */
  text-align: center;
  margin-top: 1rem;
  padding: 0 2rem 2rem 2rem;
}
</style>
