import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import About from '@/components/home/About'
import Contact from '@/components/home/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
