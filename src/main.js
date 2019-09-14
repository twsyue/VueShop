import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
Vue.use(VueAxios, axios);

axios.defaults.baseURL = "http://www.liulongbin.top:3005";

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/vdlib/iconfont.css'
import { Header, Swipe, SwipeItem, Button  } from 'mint-ui';
Vue.component(Header.name, Header); //Vue.use 不行，抛弃
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


Vue.filter('dateFormat',function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
