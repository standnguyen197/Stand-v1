import Vue from 'vue'
import Router from 'vue-router'
// index Page
import indexPage from '@/components/indexPage'
// login Page
import loginPage from '@/components/auth/loginPage'
// appPage
import appPage from '@/components/cPanel/indexCpanel'
// openPage
import openLivePage from '@/components/cPanel/indexOpenLive'
// config Vue use
Vue.use(Router)
// export router
export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/dang-nhap',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/app',
      name: 'appPage',
      component: appPage
    },
    {
      path: '/app/openLive/:id',
      name: 'openLivePage',
      component: openLivePage
    }
  ]
})
