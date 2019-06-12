import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/index/index.vue'),
      children: [
        {
          path: 'films',
          name: 'films',
          component: () => import('../views/index/films.vue'),
          children: [
            {
              path: 'list',
              name: 'list',
              component: () => import('../views/index/list.vue')
            },
            {
              path: '/',
              // component: () => import('../views/index/list.vue')
              redirect: 'list'
            }
          ]
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
        },
        {
          path: '/',
          // component: () => import('../views/index/films.vue')
          redirect: 'films'
        }
      ]
    },
    {
      path: '/city',
      component: () => import('../views/city/index.vue')
    },
    {
      path: '/details',
      component: () => import('../views/details/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/msg_login',
      name: 'msg_login',
      component: () => import('../views/login/msg_login.vue')
    },
    {
      path: '/reg',
      component: () => import('../views/reg/reg.vue')
    },
    {
      path: '/coupon-list',
      name: 'coupon-list',
      component: () => import('../views/coupon-list/index.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/charge-card/detail.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/mine/order.vue')
    },
    {
      path: '/search',
      component: () => import('../views/search/search.vue')
    },
    {
      path: '*',
      redirect: '/films'
    }
  ]
})
