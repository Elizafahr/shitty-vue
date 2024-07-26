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
      path: '/create',
      name: 'Create',
       
      component: () => import('../components/AddProduct.vue')
    },
    
    {
      path: '/edit/:id',
      name: 'Edit',
       
      component: () => import('../components/EditProduct.vue')
    }, 
  ]
})

export default router
