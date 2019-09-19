<template>
  <div id="app">
    <mt-header fixed title="VD科技">
      <span @click="goBack" slot="left" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>

    </mt-header>
    <div class="app-container">
      <transition>
        <router-view/>
      </transition>
    </div>
    <Tabbar></Tabbar>

  </div>
</template>
<script>
  import Tabbar from "./components/tabbar";
  export default {
    data(){
      return{
        flag: false
      }
    },
    created(){
      this.flag = this.$route.path ==='/home'? false :true;
    },
    components: {
      Tabbar
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    },
    watch:{
      '$route.path':function (newVal) {
        if(newVal === '/home'){
          this.flag= false
        }else {
          this.flag= true
        }
        
      }
    }
  };
</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #fff;
    padding-top: 40px;
    padding-bottom: 50px;

    .app-container {
      overflow-x: hidden;
    }
    .v-enter{
      opacity: 0;
      transform: translateX(100%);
    }
    .v-leave-to{
      opacity: 0;
      transform: translateX(-100%);
      position: absolute;
    }
    .v-leave-active,
    .v-enter-active
    {
      transition: all 0.5s ease;

    }
    .mint-header{
      z-index: 99;
    }
  }
</style>
