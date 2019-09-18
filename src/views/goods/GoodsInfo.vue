<template>
    <div class="goodsinfo">
        <div class="mui-card">
            <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p class="price">
                       市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsinfo.sell_price}}</span>
                   </p>
                    <p>
                        购买数量：<numbox></numbox>
                    </p>


                    <p class="gm">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsinfo.goods_no}}</p>
                    <p>库存情况：{{goodsinfo.stock_quantity}}</p>
                    <p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>

                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from "../../components/swiper";
    import goodsinfo_numberbox from "../../components/goodsinfo_numberbox";
    export default {
        name: "GoodsInfo",
        data(){
            return{
                id: this.$route.params.id,
                lunbotu:[],
                goodsinfo:[]

            }
        },
        created(){
            this.getLunbo();
            this. getGoodsInfo()
        },
        components: {
            swiper,
            numbox: goodsinfo_numberbox
        },
        methods:{
            getLunbo(){
                this.axios.get('api/getthumimages/' + this.id).then(result =>{
                    if(result.data.status === 0){
                        //循环每个图片数据 补全图片的宽和高 msrc
                        result.data.message.forEach(item=>{
                            item.img = item.src;
                        });
                        this.lunbotu = result.data.message
                    }
                })
            },
            getGoodsInfo(){
                this.axios.get('api/goods/getinfo/' + this.id).then(result =>{
                    if(result.data.status === 0){
                        this.goodsinfo = result.data.message[0]
                    }
                })
            },
            goDesc(id){
                this.$router.push({ name: "goodsdesc", params: { id } });
            },
            goComment(id){
                this.$router.push({ name: "goodscomment", params: { id } });
            }
        }
    }
</script>

<style lang="scss" scoped>
.goodsinfo{
    background-color: #eee;
    overflow: hidden;

    .now_price{
        color: #ff5053;
        font-size: 16px;
        font-weight: bold;

    }
    .gm button{ margin-right: 5px; }
    .mui-card-footer{
        display: block;
        button{ margin-bottom: 10px; }
    }

}
</style>