import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';

import App from './App.vue';
import Users from './components/Users';
import Test from './components/Test';
import Jeffrey from './components/Jeffrey';
import Max from './components/Max';
import './assets/foundation.min.css'
import './assets/app.css'


Vue.use(vueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component:Users},
    {path:'/test', component:Test},
    {path:'/jeffrey', component:Jeffrey},
    {path:'/max', component:Max}
  ] 


});
new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
