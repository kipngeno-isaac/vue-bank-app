import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      children:[
        {
          path: '',
          name: 'transactions',
          component: ()=> import('../components/Transactions.vue')
        },
        {
          path: '/deposit',
          name: 'deposit',
          component: ()=> import('../components/Deposit.vue')
        },
        {
          path: '/withdraw',
          name: 'withdraw',
          component: ()=> import('../components/Withdraw.vue')
        },
        {
          path: '/transfer',
          name: 'transfer',
          component: ()=> import('../components/Transfer.vue')
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    }
  ]
})

export default router
