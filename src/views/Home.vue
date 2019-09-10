<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">


    <button type="button" class="mui-btn mui-btn-royal">
      紫色
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.css'
export default {
  name: 'home',
  components: {
  },
  data(){
    return{

    }
  },
  methods:{
    show(){
      //Toast("提示信息")
      Toast({
        message: '操作成功',
        iconClass: 'icon icon-success',
        duration:1000,
        position:'top'
      });
    }
  }
}
</script>
