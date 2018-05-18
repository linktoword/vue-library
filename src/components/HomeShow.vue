<template>
<el-col :span="7">  
  <img :src="list.url" >
  <div>血之熬</div>  
</el-col> 
</template>
<script>
export default ({
  props: {  //父子组件之间传值 定义为组件的属性
     list: {
       type: Object,
       require: true
     }
    }
  
})
</script>
<style scoped>
el-col {
  flex: auto;  
}
img {
  width: 100%;
  height: 100%;
}

</style>

