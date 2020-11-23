import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

// Vue.config.productionTip = false
//setting up default vue's http modules for api calls
// Vue.prototype.$http = axios
const token = localStorage.getItem("token")
axios.defaults.headers.common["Authorization"] = token;

// Vue.prototype.$http.defaults.headers.common['Authorization'] = token

createApp(App).use(store).use(router).mount('#app')
