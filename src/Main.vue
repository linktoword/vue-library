<template>
<div id="app">
  <!-- 用 router-view 渲染视图 -->
  <router-view></router-view>
    <mu-paper class="nav">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
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
      bottomNav: "Home",
      bottomNavColor: "Home"
    };
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val;
    }
  }
};
</script>
<style scoped>
.nav {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
