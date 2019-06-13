import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.less'

import { Tabbar, TabbarItem, Tab, Tabs, Toast, CouponCell, CouponList, Popup, Loading, Button } from 'vant'
Vue
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(CouponCell).use(CouponList).use(Popup).use(Loading).use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
