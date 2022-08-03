import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
// import Vue from 'vue'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: (h) => App,
// }).$mount('#app')

// createApp(App).use(router).mount('#app')

const app = createApp(App)

app.use(router).mount('#app')
