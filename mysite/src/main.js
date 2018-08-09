// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import jQuery from 'jquery'

// import VueSweetalert2 from 'vue-sweetalert2';

// Vue.use(VueSweetalert2);
// import swal from 'sweetalert2/dist/sweetalert2.js'
// import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

Vue.prototype.$axios = axios
Vue.prototype.$jQuery = jQuery
// Vue.prototype.$swal = Swal

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
