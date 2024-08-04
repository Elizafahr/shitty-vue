<script  > 
  export default{
    data(){
      return{
          

        userName: "", 
        userPass: "", 
        userEmail: "", 

      }
    },
    methods:{
      
      insertData(val){
        this.userName = val
      }
    }
  }
</script>

<template>
   
     <input type="text" v-on:input="insertData($event.target.value )" placeholder='name' />  
   
 
   <input type="text"   placeholder='name' /> 
   <input type="password"  placeholder='password' />
   <input type="email"  placeholder='email' />

   <p>{{userName}}</p>
</template>

<style scoped> 
h1{
  color: blue;
}
</style>
