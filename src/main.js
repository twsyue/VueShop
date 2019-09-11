import Vue from 'vue'
import App from './App.vue'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/vdlib/iconfont.css'
import router from './router'
import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui'
import axios from 'axios';
Vue.prototype.$axios=axios;

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name, Header); //Vue.use 不行，抛弃

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
