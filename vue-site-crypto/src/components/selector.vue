<script> 
export default {
  props:{
      setCrypto: {
        type: Function, 
        required: true
      }
    }, 
    data(){
      return{
        current: '', 
      }
    },
    methods:{
      setItem(value){
        this.setCrypto(value);
        this.current=value;
      }
    }
}
</script>




<template>
   <ul>
    <li @click="setItem('Bitcoin')" :className="current =='Bitcoin' ? 'active' : '' ">Bitcoin</li>
    <li @click="setItem('USDT')"   :className="current =='USDT' ? 'active' : ''  ">USDT</li>
    <li @click="setItem('ETH')"   :className="current =='ETH' ? 'active' : '' "  >ETH</li>
   </ul>
  
</template>

<style scoped> 
ul {
  list-style-type: none;
  padding: 20px;
  margin: 10px 0 10px 0;
  border-radius: 10px;
  background-color: #28303b;
  width: 100%;
  max-width: 400px;
}

li {
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

li:hover  {
  background-color: #e4e4e4;
  cursor: pointer;
}
  li.active {
  background-color: #cccccc;
  cursor: pointer;
}
</style>
