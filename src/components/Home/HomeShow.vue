<template>

<!-- 展示组件 -->
  <div class="H-S-app">

    <!-- 标题 -->
      <div class="H-S-top" >
        <i class="material-icons">{{icon}}</i>
        <div>{{header}}</div>
      </div> 

      <!-- 作品展示 -->
      <div class="H-S-main">

        <!-- 循环体 -->
        <div class="H-S-list-item" v-for= "list in HSlists" :key= "list.id" :style= "{width: weightSize}">
          <img :src= "list.url">
          <div class="H-S-title">{{ list.title }}</div>
          <div class="H-S-author" v-if= "showAuthor">作者：{{list.author}}</div>
        </div> 

      </div>
  </div>
</template>

<script>
  export default {
    props: {   //定义组件属性
      icon: String,  //material 图标的名字
      header: String, //块级标题
      HSlists: [Array, Object], // 图片资源 包含 url id 作者 作品名字 
      showAuthor: Boolean, //是否显示作者
      num: {  //
        type: Number,
        default: 3  //设置默认值
        }  
    },
    data(){
      return {
      }
    },
    computed: {
      weightSize: function() {  //计算每个图片区域占据的宽度
        return 100 / this.num + '%' 
      }
    }
  }
    
</script>

<style>
.H-S-app {
  border-bottom: 1px solid rgba(100, 100, 100, .2);
  /* box-shadow: 0 2px 10px 2px rgb(114, 114, 114); */
  /* flex布局  子项目沿垂直方向从上往下排列 */
  display: flex;
  flex-direction: column; 
}
.H-S-app .H-S-top {
  display: flex;
  margin: .2rem 0;
}

/* 主标题 加粗放大 */
.H-S-app .H-S-top div {
  font-size: 1.1rem;
  font-weight: 900;
}

/* 图标样式 */
.H-S-app i {
  color: red;
  margin: 0 .2rem;
}

/* 使图片排成一行 两端对齐，项目之间的间隔都相等*/ 
.H-S-app .H-S-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* 一条轴线排不下 换行，第一行在上方 */
}

/*图片间留白*/
.H-S-app .H-S-main .H-S-list-item {
  flex: 0 1 auto;
  /* width: 33%; */
  padding: .2rem;
  font-weight: 700;
}

/* 图片自适应 */
.H-S-app .H-S-main .H-S-list-item img {
  width: 100%;  
  height: auto;
  border-radius: .8rem;  
} 

/* 每个图片标题 */
.H-S-app .H-S-main .H-S-list-item .H-S-title {
  font-size: 1rem;
   text-overflow:ellipsis; /* 表示文本超出用省略号代替 */
   white-space:nowrap;  /* 表示文本不换行 */
   overflow:hidden;   /* 表示超出隐藏 */
}

/* 作者字体样式 */
.H-S-app .H-S-main .H-S-list-item .H-S-author {
  font-size: .8rem;
  color: rgb(102,102,102);
  font-weight: 100;
   overflow:hidden;
  text-overflow:ellipsis; 
  white-space: nowrap;
}

</style>
