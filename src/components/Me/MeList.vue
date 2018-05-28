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
  height: 135px;
  align-items: center;
  border-top: 1px solid #aaa;
  position: relative;
}

.item .img-wapper {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  margin: 0 25px  0 30px;
}

.item .text {
  font-size: 40px;
}
.item .icon {
  position: absolute;
  right: 35px;
}
</style>
