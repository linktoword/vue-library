<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options= "swiperOption" ref= "mySwiper" >
    <!-- slides -->
    <!-- <swiper-slide v-for= "item in LBPics" :key= "item.id">
      <img src="item.url" alt="">
    </swiper-slide> -->
    <swiper-slide>
      <img src="/src/assets/LB/LB_05.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="/src/assets/LB/LB_06.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="/src/assets/LB/LB_07.jpg" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>
 
<script>
  export default {
    name: 'carrousel',
    // props: [  ],
    data() {
      return {
        // LBPics: [
        //   {
        //     url: '/src/assets/LB/LB_05.jpg',
        //     id: 5
        //   },
        //   {
        //     url: '/src/assets/LB/LB_06.jpg',
        //     id: 6
        //   },
        //   {
        //     url: '/src/assets/LB/LB_07.jpg',
        //     id: 7
        //   }
        // ],
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
                    
          autoplay : {
            disableOnInteraction: false, //用户操作后是否禁止自动循环
            delay: 3000 //自自动循环时间
          }, //可选选项，自动滑动
          speed: 2000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
          loop:true, //循环切换
          grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
          setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
          autoHeight: true,     //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。     
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
          observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper

          pagination: {
            el: '.swiper-pagination',
            type : 'bullets', //分页器形状
            clickable :true, //点击分页器的指示点分页器会控制Swiper切换。
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
    }
  }
</script>

<style scoped >
img {
  width: 100%;
  height: auto;
}
</style>
