<template>
  <div id="app">
    <mt-header fixed title="VD科技"></mt-header>
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
    components: {
      Tabbar
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
