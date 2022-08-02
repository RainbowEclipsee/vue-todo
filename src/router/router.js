// import Vue from 'vue'
// import Router from 'vue-router'
import Home from '@/views/Home'
import { createRouter, createWebHistory } from 'vue-router'
// import Todos from '@/views/Todos'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       component: Home,
//     },
//     {
//       path: '/todos',
//       component: () => import('./views/Todos.vue'),
//     },
//   ],
// })

const routes = [
  {
    path: '/',
    component: Home,
    // children: [
    //   {
    //     path: '/todos',
    //     component: '@/views/Todos',
    //   },
    // ],
  },
  {
    path: '/todos',
    component: () => import('./views/Todos.vue'),
    // component: './views/Todos.vue',
    // component: Todos,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
