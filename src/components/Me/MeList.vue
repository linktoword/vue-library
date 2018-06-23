<template>
  <div class="me-list-wapper">
    <div  class="item"
          v-for= "item in items"
          :key= "item.id">
      
      <div class="img-wapper"><img :src= "item.url" alt=""></div>
      <div class="text"> {{ item.text }}</div>
      <mu-icon class="icon" value= "navigate_next" color="#999" :size="item.size"></mu-icon>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items'],
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>

.me-list-wapper {
  border-bottom: 1px solid #aaa;
  background: #fff;
}

.item {
  display: flex;
  width: 100%;
  padding: .5rem;
  /* height: 135px; */
  align-items: center;
  border-top: 1px solid #aaa;
  position: relative;
}

.item .img-wapper {
  /* width: 1rem;
  height: 1rem; */
  border-radius: 50%;
  /* margin: 0 1rem  0 1rem; */
}

.item .img-wapper img {
  width: 2rem;
  height: 2rem;
  margin: .5rem 1rem 0 0;
}

.item .text {
  font-size: 1.5rem;
}
.item .icon {
  position: absolute;
  right: 0;
}
</style>
