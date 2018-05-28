<template>
  <div class="wapper">
    <me-landing></me-landing>

  </div>
</template>

<script>
import Landing from './components/Me/Landing'
  export default {
    components: {
      'me-landing': Landing
    }
   
  }
</script>
<style scoped>
.wapper {
  background: #eee;
}
</style>
