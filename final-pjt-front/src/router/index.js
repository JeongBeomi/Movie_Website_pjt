import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from '../views/LogInView.vue'
import CommunityView from '@/views/CommunityView'
import SignUpView from '@/views/SignUpView'
import CommunityDetailView from '@/views/CommunityDetailView'
import CommunityCreateView from '@/views/CommunityCreateView'
import MyProfileView from '@/views/MyProfileView'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/community',
    name: 'CommunityView',
    component: CommunityView
  },
  {
    path: '/community_detail/:id',
    name: 'CommunityDetailView',
    component: CommunityDetailView
  },
  {
    path: '/community_create',
    name: 'CommunityCreateView',
    component: CommunityCreateView
  },
  {
    path: '/myprofile',
    name: 'MyProfileView',
    component: MyProfileView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
