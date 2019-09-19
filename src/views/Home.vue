<template>
    <div class="home">

        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newslist">
                    <img src="../assets/menu1.png">
                    <div class="mui-media-body">资讯头条</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/photolist">
                    <img src="../assets/menu2.png">
                    <div class="mui-media-body">产品秀</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodslist">
                <img src="../assets/menu3.png">
                <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../assets/menu4.png">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../assets/menu5.png">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/about">
                <img src="../assets/menu6.png">
                <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    import swiper from "../components/swiper";
    import { Toast  } from 'mint-ui';
    export default {
        name: 'home',
        components: {swiper},
        data() {
            return {
                lunbotuList:[]
            }
        },
        created(){
          this.getLunbo();
        },
        methods: {
            getLunbo(){
                this.axios.get('api/getlunbo').then(response =>{
                    if(response.data.status === 0){
                        this.lunbotuList = response.data.message;
                    }else {
                        Toast("加载轮播图失败");
                    }
                })

            }

        }
    }
</script>
<style lang="scss" scoped>
    .home {
        .mint-swipe {
            height: 200px;
            .mint-swipe-item {
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