import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Tabbar, TabbarItem, Tab, Tabs, Toast } from 'vant'
Vue
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
