import Vue from 'vue'
import App from './App.vue'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import router from './router'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header); //Vue.use 不行，抛弃

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
