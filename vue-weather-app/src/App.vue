<script>
import axios from "axios";
import Detail from "./components/details.vue";

export default {
  components: {
    Detail,
  },
  data() {
    return {
      city: "",
      error: "",
      info: null,
      currentTime: "",
      currentDay: "",
    };
  },
  created() {
    this.updateTimeAndDay();
  },
  computed: {
    cityName() {
      return "«" + this.city + "»";
    },
    tempInfo() {
      if (this.info) {
        return "" + this.info.temp;
      }
      return "";
    },
    TempFeelsLikeInfo() {
      if (this.info) {
        return "Ощущается как: " + this.info.feels_like;
      }
      return "";
    },
    tempMinInfo() {
      if (this.info) {
        return "Минимальная температура: " + this.info.temp_min;
      }
      return "";
    },
    tempMaxInfo() {
      if (this.info) {
        return "Максимальная температура: " + this.info.temp_max;
      }
      return "";
    },
    humidity() {
      if (this.info) {
        return "Относительная влажность: " + this.info.humidity;
      }
      return "";
    },
  },
  methods: {
    getWeather() {
      if (this.city.trim().length < 2) {
        this.error = "Нужно название > 1 символа!!";
        return;
      }
      this.error = "";

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=92d6379a601b02e340d0912bbcdd923d`
        )
        .then((res) => {
          this.info = res.data.main;
        })
        .catch((error) => {
          this.error = "Ошибка при получении погоды: " + error.message;
        });
    },
    updateTimeAndDay() {
      const currentDate = new Date();
      this.currentTime = this.formatTime(currentDate);
      this.currentDay = this.getDayOfWeek(currentDate.getDay());
    },
    formatTime(date) {
      return `${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    },
    getDayOfWeek(dayIndex) {
      const daysOfWeek = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ];
      return daysOfWeek[dayIndex];
    },
  },
};
</script>
<template>
  <div class="wrapper">
    <div class="sidebar">
      <h1>Weather Forecast</h1>
      <p class="light">
        Check the weather in {{ city == "" ? " your city" : cityName }}
      </p>
      <div class="search-container">
        <input type="text" v-model="city" placeholder="Enter city" />
        <button v-if="city !== ''" @click="getWeather()">Get Weather</button>
        <button v-else disabled>Enter city</button>
      </div>
      <div class="icon-weather"></div>
      <h1>{{ tempInfo }}</h1>
      <h4>{{ currentDay }}, {{ currentTime }}</h4>
    </div>
     <div class="main">
      <p class="error">{{ error }}</p>

      <div class="result-container" v-if="info">
        <div class="result-card">
          <div class="card-content">
            <h2>{{ tempInfo }}</h2>

            <!-- <Detail
            :tempInfo="tempInfo"
            :TempFeelsLikeInfo="TempFeelsLikeInfo"
            :tempMinInfo="tempMinInfo"
            :tempMaxInfo="tempMaxInfo"
          /> -->
            <div class="weather-details">
              <Detail :tempInfo="tempInfo" />
              <Detail :TempFeelsLikeInfo="TempFeelsLikeInfo" />
              <Detail :tempMinInfo="tempMinInfo" />
              <Detail :tempMaxInfo="tempMaxInfo" />
              <Detail :humidity="humidity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

/* Wrapper Styles */
.wrapper {
  display: flex;
  height: 100vh;
}

/* Sidebar Styles */
.sidebar {
  background-color: #ffffff;
  color: #000000;
  padding: 2rem;
  text-align: left;
  flex: 0 0 300px;
}

.sidebar h1 {
  margin-top: 0;
}

.light {
  font-weight: lighter;
}

.search-container {
  margin-top: 2rem;
  display: flex;
}

.search-container input {
  padding: 0.5rem;
  border: none;
  border-radius: 4px 0 0 4px;
  width: 200px;
  border: #f0f0f0 1px solid;
}

.search-container button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0 4px 4px 0;
  background-color: #eaeeff;
  color: #000000;
  cursor: pointer;
}

.search-container button:disabled {
  background-color: #999;
  cursor: not-allowed;
}

/* Main Content Styles */
.main {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error {
  color: red;
  font-weight: bold;
  margin-bottom: 1rem;
}

.result-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 80%;
  max-width: 500px;
}

.result-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-content {
  text-align: center;
}

.weather-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.weather-details > * {
  margin-bottom: 0.5rem;
}
</style>
