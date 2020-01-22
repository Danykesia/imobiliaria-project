import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faChevronRight,
  faHouseDamage,
  faHome,
  faWarehouse,
}
  from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faSearch, faChevronRight, faHouseDamage, faInstagram,
  faFacebook, faTwitter, faHome, faWarehouse);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
