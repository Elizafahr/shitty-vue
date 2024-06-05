<script>
import Input from "./components/input.vue";
import Selector from "./components/selector.vue";
import CryptoConvert from "crypto-convert";

const convert = new CryptoConvert();

export default {
  components: { Input, Selector },

  data() {
    return {
      amount: 0,
      cryptoFirst: "",
      cryptoSecond: "",
      error: "",
      result: 0,
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
    async convert() {
      if (this.cryptoFirst === "" || this.cryptoSecond === "") {
        this.error = "Выбери валюту";
        return;
      } else if (this.cryptoFirst === this.cryptoSecond) {
        this.error = "Выбери другую валюту";
        return;
      } else if (this.amount <= 0) {
        this.error = "Число больше 0!!!";
        return;
      }
      this.error = "";
      await convert.ready();
      if (this.cryptoFirst == "Bitcoin" || this.cryptoSecond == "ETH") {
        this.result = convert.BTC.ETH(this.amount);
      } else if (this.cryptoFirst == "Bitcoin" || this.cryptoSecond == "USDT") {
        this.result = convert.BTC.USD(this.amount);
      } else if (this.cryptoFirst == "USDT" || this.cryptoSecond == "ETH") {
        this.result = convert.USD.ETH(this.amount);
      } else if (this.cryptoFirst == "USDT" || this.cryptoSecond == "Bitcoin") {
        this.result = convert.USD.BTC(this.amount);
      } else if (this.cryptoFirst == "ETH" || this.cryptoSecond == "Bitcoin") {
        this.result = convert.ETH.BTC(this.amount);
      } else if (this.cryptoFirst == "ETH" || this.cryptoSecond == "USDT") {
        this.result = convert.ETH.USD(this.amount);
      }
    },
  },
};
</script>

<template>
  <div class="box">
    <h1>Crypto convert</h1>

    <Input :changeAmount="changeAmount" :convert="convert" />
    <div class="flex">
      <Selector :setCrypto="setFirstCrypto" />
      <Selector :setCrypto="setSecondCrypto" />
    </div>
    <p v-if="error">{{ error }}</p>
    <p v-if="result !== 0">{{ result }}</p>
  </div>
</template>

<style scoped>
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
