<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      city: "",
      error: "",
      info: null,
    };
  },
  computed: {
    cityName() {
      return "«" + this.city + "»";
    },
    tempInfo() {
      return "Температура: " + this.info.feels_like;
    },
    TempFeelsLikeInfo() {
      return "Ощущается как: " + this.info.feels_like;
    },
    tempMinInfo() {
      return "Минимальная температура: " + this.info.temp_min;
    },
    tempMaxInfo() {
      return "Максимальная температура: " + this.info.temp_max;
    },
  },
  methods: {
    //Заменили на более современный и легкий способ
    // putCity(value){
    //   this.city= value
    // },
    getWeather() {
      if (this.city.trim().length < 2) {
        this.error = "Нужно название > 1 символа!!";
        return false;
      }
      this.error = "";

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=92d6379a601b02e340d0912bbcdd923d`
        )
        .then((res) => (this.info = res.data.main));
    },
  },
};
</script>
<template>
  <div class="wrapper">
    <h1>Weather Forecast</h1>
    <p class="light">
      Check the weather in {{ city == "" ? " your city" : cityName }}
    </p>
    <div class="search-container">
      <input type="text" v-model="city" placeholder="Enter city" />
      <button v-if="city !== ''" @click="getWeather()">Get Weather</button>
      <button v-else disabled>Enter city</button>
    </div>
    <p class="error">{{ error }}</p>

    <div class="result-container" v-if="info">
      <div class="result-card">
        <div class="card-content">
          <h2>{{ tempInfo }}</h2>

          <div class="weather-details">
            <div class="detail">Feels Like: {{ TempFeelsLikeInfo }}</div>
            <div class="detail">Min Temp: {{ tempMinInfo }}</div>
            <div class="detail">Max Temp: {{ tempMaxInfo }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 600px;
  width: 90vw;
  height: max-content;
  border-radius: 50px;
  background-color: rgb(255, 255, 255);
  margin: auto;
  padding: 30px 20px;
  text-align: center;
}
.ligth {
  color: rgb(70, 70, 70);
}
.wrapper h1 {
  margin-bottom: 10px;
}
.wrapper input {
  margin-top: 30px;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgb(82, 82, 82);
  color: black;
  font-size: 14px;
  padding: 5px 15px;
  outline: none;
}
.flex {
  display: flex;
  justify-content: center;
}
.wrapper input:focus {
  border-bottom: 2px solid rgb(0, 197, 43);
}
.wrapper button {
  margin-top: 30px;
  background: rgb(0, 197, 43);
  border: none;
  color: rgb(255, 255, 255);
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 5px;
  margin-left: 10px;
  transition: 400ms ease;
}
.wrapper button:disabled {
  background: rgb(122, 122, 122);
  cursor: not-allowed;
}
.wrapper button:hover {
  background: rgb(0, 95, 21);
}
.error {
  color: red;
  font-style: italic;
  margin-top: 30px;
}
.res {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.weather-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.detail {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}
</style>
