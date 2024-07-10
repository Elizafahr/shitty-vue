import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Likes',
      name: 'Likes', 
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/new',
      name: 'new', 
      component: () => import('../views/new.vue')
    }
    , 
    {
      path: '/posts/:id',
      name: 'post', 
      component: () => import('../views/postIdPage.vue')
    }
  ]
})

export default router
