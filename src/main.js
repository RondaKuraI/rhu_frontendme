import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/css/poppins.css'; // Import the Poppins stylesheet
import axios from 'axios'

loadFonts()

axios.defaults.baseURL = "http://rhu_backending.test/"

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
