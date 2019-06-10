import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/index',
      component: () => import('../views/index/index.vue'),
      children: [
        {
          path: 'films',
          name: 'film',
          component: () => import('../views/index/films.vue')
        },
        {
          path: 'cinema',
          name: 'cinema',
          component: () => import('../views/index/cinema.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import('../views/index/mine.vue')
        }
      ]
    },
    {
      path: '/city',
      component: () => import('../views/city/city.vue')
    },
    {
      path: '/details',
      component: () => import('../views/details/details.vue')
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/reg',
      component: () => import('../views/reg/reg.vue')
    },
    {
      path: '*',
      component: () => import('../views/index/index.vue')
    }
  ]
})
