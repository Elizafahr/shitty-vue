<template>
    <div class="detail">
      <h2>{{ tempInfo }}</h2>
      <div class="weather-details">
        <div class="detail">Feels Like: {{ TempFeelsLikeInfo }}</div>
        <div class="detail">Min Temp: {{ tempMinInfo }}</div>
        <div class="detail">Max Temp: {{ tempMaxInfo }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tempInfo: {
        type: String,
        required: true,
      },
      TempFeelsLikeInfo: {
        type: String,
        required: true,
      },
      tempMinInfo: {
        type: String,
        required: true,
      },
      tempMaxInfo: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .detail {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }
  
  .weather-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
  </style>
  