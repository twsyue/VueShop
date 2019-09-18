<template>
    <nav class="tabbar">
        <router-link to="/home" class="tab-item">
            <span class="tab-icon iconfont icon-shouye"></span>
            <span class="tab-label">首页</span>
        </router-link>
        <router-link to="/member" class="tab-item">
            <span class="tab-icon iconfont icon-huiyuan"></span>
            <span class="tab-label">会员</span>
        </router-link>
        <router-link to="/shopcar" class="tab-item">
            <span class="tab-icon iconfont icon-gouwu"><span class="tab-badge">9</span></span>
            <span class="tab-label">购物车</span>
        </router-link>
        <router-link to="/search" class="tab-item">
            <span class="tab-icon iconfont icon-chazhao"></span>
            <span class="tab-label">搜索</span>
        </router-link>
    </nav>
</template>

<script>

    export default {
        name: "tabbar",
        components: {},
        data() {
            return {};
        }
    };
</script>

<style lang="scss" scoped>
    .tabbar {
        position: fixed;
        z-index: 99;
        right: 0;
        left: 0;
        bottom: 0;
        display: table;
        width: 100%;
        height: 50px;
        padding: 0;
        border-bottom: 0;
        background-color: #f7f7f7;
        -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .85);
        box-shadow: 0 0 1px rgba(0, 0, 0, .85);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        table-layout: fixed;
        border-top: 0;
        border-bottom: 0;
        -webkit-touch-callout: none;
        .tab-item {
            display: table-cell;
            overflow: hidden;
            width: 1%;
            height: 50px;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #929292;

            .tab-icon {
                font-size: 24px;
                position: relative;
                z-index: 20;
                top: 3px;
                width: 24px;
                height: 24px;
                padding-top: 0;
                padding-bottom: 0;
                line-height: 1;
                display: inline-block;
                text-decoration: none;
            }

            .tab-label {
                font-size: 11px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: center;
            }
        }

        .tab-active {
            background: transparent;
            color: #007aff;

        }

        .tab-badge {
            position: absolute;
            top: -3px;
            right: -8px;
            font-size: 12px;
            line-height: 1;
            display: inline-block;
            padding: 3px 6px;
            color: #333;
            border-radius: 100px;
            background-color: #ff5053;
        }


    }

</style>