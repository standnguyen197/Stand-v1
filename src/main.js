// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FBSignInButton from 'vue-facebook-signin-button'
import FBSdk from './FBSdk'
import VueSession from 'vue-session'
import vueHeadful from 'vue-headful';
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
require('moment/locale/vi')
Vue.component('icon', Icon)
Vue.component('vue-headful', vueHeadful);
Vue.use(VueSession)
Vue.use(FBSdk)
Vue.use(FBSignInButton)
Vue.config.productionTip = false
Vue.use(BootstrapVue)


Vue.use(VueMoment, {
    moment,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
