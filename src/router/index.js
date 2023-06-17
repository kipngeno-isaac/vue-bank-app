import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: () => import('../views/Layout/Auth.vue'),
      children: [
        { 
          path: 'login',
          component: () => import('../components/Login.vue'),
        },
        { 
          path: 'register',
          component: () => import('../components/Register.vue'),
        },
      ]
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Transactions.vue')
    }
  ]
})

export default router
