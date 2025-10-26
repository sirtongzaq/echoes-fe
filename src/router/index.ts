import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import Settings from '@/pages/Settings.vue'
import Capsule from '@/pages/Capsule.vue'
import Inbox from '@/pages/Inbox.vue'

const routes = [
  { path: '/', redirect: '/home' }, // ให้ root / ไปที่ /home
  { path: '/home', component: Home },
  { path: '/profile', component: Profile }, 
  { path: '/settings', component: Settings },
  { path: '/capsule', component: Capsule },
  { path: '/inbox', component: Inbox },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
