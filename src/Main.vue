<template>
<div id="app">
  <!-- 用 router-view 渲染视图 -->
  <router-view></router-view>
    <mu-paper class="nav">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <!-- tag指定渲染成的标签 -->
        <mu-bottom-nav-item class="nav-item" :to="{name: 'Home'}" tag="div" exact value="movies" title="Home" icon="home"/>
        <mu-bottom-nav-item class="nav-item" :to="{name: 'News'}" tag="div" value="music" title="News" icon="explore"/>
        <mu-bottom-nav-item class="nav-item" :to="{name: 'Story'}" tag="div" value="books" title="Story" icon="books"/>
        <mu-bottom-nav-item class="nav-item" :to="{name: 'Me'}" tag="div" value="pictures" title="Me" icon="perm_identity"/>
      </mu-bottom-nav>
    </mu-paper>
</div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "movies",
      bottomNavColor: "movies"
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
