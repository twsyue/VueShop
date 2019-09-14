<template>
    <div id="app">
        <mt-header fixed title="VD科技"></mt-header>
        <div class="app-container">
            <transition>
                <router-view/>
            </transition>

        </div>

        <nav class="mui-bar mui-bar-tab">
            <router-link to="/home" class="mui-tab-item">
                <span class="mui-icon iconfont icon-shouye"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/member" class="mui-tab-item">
                <span class="mui-icon iconfont icon-huiyuan"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link to="/shopcar" class="mui-tab-item">
                <span class="mui-icon iconfont icon-gouwu"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link to="/search" class="mui-tab-item">
                <span class="mui-icon iconfont icon-chazhao"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>

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
    }
</style>
