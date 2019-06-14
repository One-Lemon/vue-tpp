import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/index/index.vue'),
      children: [
        {
          path: 'films',
          component: () => import('../views/index/films.vue'),
          children: [
            {
              path: '/',
              component: () => import('../views/index/list.vue')
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
          component: () => import('../views/index/mine.vue'),
          meta: {
            isLogin: true
          }
        },
        {
          path: '/',
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
      name: 'details',
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
      path: '/pay',
      name: 'pay',
      component: () => import('../views/pay/index.vue')
    },
    {
      path: '*',
      redirect: '/films'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// eslint-disable-next-line no-unused-expressions
router.beforeEach((to, from, next) => {
  // 路由拦截
  if (to.meta.isLogin) {
    // 判断是否有登录
    if (window.localStorage.getItem('userInfo')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
