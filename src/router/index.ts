import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import Settings from '@/pages/Settings.vue'

const routes = [
  { path: '/', redirect: '/home' }, // ให้ root / ไปที่ /home
  { path: '/home', component: Home },
  { path: '/profile', component: Profile }, 
  { path: '/settings', component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
