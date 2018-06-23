<template>
<div id="app">
  <!-- 用 router-view 渲染视图 -->
  <router-view></router-view>
  <div class="zhanwei"></div>
    <mu-paper class="nav">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange" class="nav-wapper">
        <!-- tag指定渲染成的标签 -->
        <mu-bottom-nav-item class="nav-item" :to="{name: 'Home'}" tag="div"  value="Home" title="Home" icon="home" replace />
        <mu-bottom-nav-item class="nav-item" :to="{name: 'News'}" tag="div" value="News" title="News" icon="explore" replace/>
        <mu-bottom-nav-item class="nav-item" :to="{name: 'Story'}" tag="div" value="Story" title="Story" icon="books" replace/>
        <mu-bottom-nav-item class="nav-item" :to="{name: 'Me'}" tag="div" value="Me" title="Me" icon="perm_identity" replace/>
      </mu-bottom-nav>
    </mu-paper>
</div>
</template>

<script>
export default {
  data() {
    return {
      // bottomNav: "Home",
      bottomNavColor: "Home"
    };
  },
  //修复不在home页面刷新 下方按钮改变为home页突出 上方仍是非home页
  computed: {
    bottomNav:{
      get : function () {
      return this.$route.name //当前页面的路由name ： 例如News      
      }
      ,
      set : function () {
      }
    }
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val;
    }   
  }
};
</script>
<style scoped>
.zhanwei {
  width: 100%;
  height: 3rem;
}
.nav {
  position: fixed;
  bottom: 0px;
  width: 100%;
}

</style>
