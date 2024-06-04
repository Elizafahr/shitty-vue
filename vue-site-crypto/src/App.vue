<script>
import Input from "./components/input.vue";
import Selector from "./components/selector.vue";

export default {
  components: { Input, Selector },

  data() {
    return {
      amount: 0,
      cryptoFirst: "",
      cryptoSecond: "",
    };
  },
  methods: {
    changeAmount(value) {
      this.amount = value;
    },
    setFirstCrypto(value) {
      this.cryptoFirst = value;
    },
    setSecondCrypto(value) {
      this.cryptoSecond = value;
    },
  },
};
</script>

<template>
  <div class="box">
    <h1>Crypto convert</h1>
    
    <Input :changeAmount="changeAmount" />
    <div class="flex">
      <Selector :setCrypto="setFirstCrypto" />
      <Selector :setCrypto="setSecondCrypto" />
    </div>
  </div>
</template>

<style scoped>
input {
  margin: auto;
  padding: 10px 15px;
  border-radius: 5px;
  background: white;
  border: none;
  border-bottom: 2px solid rgb(82, 82, 82);
  color: black;
  font-size: 14px;
  outline: none;
  display: block;
  width: 300px;
}
.flex {
  display: flex;
  width: 100%;
  gap: 40px;
  justify-content: center;
}
.flex {
  display: flex;
  width: 100%;
}


</style>
