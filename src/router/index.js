// src/router/index.js (or .ts)

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 1. ADD THIS IMPORT LINE:
import GuestbookView from '../views/GuestbookView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // 2. ADD THIS NEW ROUTE:
    {
      path: '/guestbook', 
      name: 'guestbook',
      component: GuestbookView
    }
  ]
})

export default router
