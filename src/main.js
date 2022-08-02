import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
// import Vue from 'vue'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: (h) => App,
// }).$mount('#app')

createApp(App).use(router).mount('#app')
