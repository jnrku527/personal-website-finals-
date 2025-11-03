// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
// Ensure this path is correct: it must match your file structure: src/views/HomeView.vue
import HomeView from '../views/HomeView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView // This loads your custom Home page
    },
    // We will add the Guestbook route here later.
  ]
})

export default router
