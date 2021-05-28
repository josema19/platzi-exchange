import Vue from 'vue'
import App from './App.vue'
import { VueSpinners } from '@saeris/vue-spinners';
import '@/assets/css/tailwind.css';
import Chartkick from 'vue-chartkick';
import { Chart } from 'chart.js';
import { dollarFilter, percentFilter } from '@/filters';

import '@/router';
import router from '@/router';

Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
