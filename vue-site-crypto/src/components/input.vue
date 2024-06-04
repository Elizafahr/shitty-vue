<script> 
export default {
    props:{
      changeAmount: {
        type: Function, 
        required: true
      }
    }
}
</script>
<template>
  <input type="number" min="1" placeholder="Put your number" @input="changeAmount($event.target.value)">
  
</template>

<style scoped> 
</style>
