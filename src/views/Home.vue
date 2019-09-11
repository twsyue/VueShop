<template>
    <div class="home">
        <mt-swipe :auto="4000">
            <mt-swipe-item  v-for="item in lunnotuList" :key="item.id"><img :src="item.img"></mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
<!--                <span class="mui-icon mui-icon-home"></span>-->
                <img src="../assets/menu1.png">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../assets/menu2.png">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../assets/menu3.png">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../assets/menu4.png">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../assets/menu5.png">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../assets/menu6.png">
                <div class="mui-media-body">联系我们</div></a></li>

        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                lunnotuList:[]
            }
        },
        created(){
          this.getLunbo();
        },
        methods: {
            getLunbo(){
                this.$axios.get('http://www.liulongbin.top:3005/api/getlunbo').then(result =>{
                    if(result.data.status === 0){
                        //console.log('ok')
                        this.lunnotuList = result.data.message;
                        Toast("加载轮播图OK");
                    }
                })

            }

        }
    }
</script>
<style lang="scss" scoped>
    .home {
        .mint-swipe {
            height: 220px;

            .mint-swipe-item {
                &:nth-child(1) {
                    background: #6d6d72;
                }
                &:nth-child(2) {
                    background: #8a6de9;
                }
                &:nth-child(3) {
                    background: #f0ad4e;
                }
                &:nth-child(4) {
                    background: #2ac845;
                }
                img{width: 100%;
                    height: 100%;}

            }
        }
        .mui-grid-view.mui-grid-9{
            background: #fff;
            .mui-table-view-cell{
                border: 0;
                img{ height: 60px; width: 60px;}
                .mui-media-body{font-size: 13px;}

            }
        }
    }

</style>