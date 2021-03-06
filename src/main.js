import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/content/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();
Vue.use(toast);
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/placeholder.png'),
  error: require('./assets/img/placeholder.png')
});
FastClick.attach(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
