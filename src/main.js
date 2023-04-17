import Vue from 'vue'
import App from './App.vue'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import store from './store/store';
import router from './router/router';

Vue.use(Donut);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
})
.$mount('#app')
