import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' // index.js 생략
import store from './store' // index.js 생략

createApp(App)
  .use(router) 
  .use(store)
  .mount('#app')