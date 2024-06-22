import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
new Vue({
    el: '#app',
    components: {
      'app': App
    }
  })