import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入axios包
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
axios.defaults.baseURL = "http://www.liulongbin.top:3005";
// axios.defaults.baseURL = "http://127.0.0.1:80";
// axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';

//导入Mui样式
import './assets/lib/mui/css/mui.css'
//import mui from './assets/lib/mui/js/mui.js'
//Vue.prototype.mui=mui;

//导入自定义字体图标
import './assets/lib/vdlib/iconfont.css'

//导入Mint-ui组件
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUi);

//图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

//导入格式化时间的插件
import moment from 'moment'
Vue.filter('dateFormat',function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
});
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
