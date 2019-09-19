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
                        购买数量：<numbox @getcount="getSelectCount" :max="goodsinfo.stock_quantity"></numbox>
                    </p>


                    <p class="gm">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar()">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfo.goods_no }}</p>
                    <p>库存情况：{{ goodsinfo.stock_quantity }}</p>
                    <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>

                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
        >
            <div class="ball"  v-show="ballFlag" ref="ball"></div>
        </transition>

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
                selectCount: 1,
                lunbotu:[],
                goodsinfo:[],
                ballFlag:false,
                SelectCount:1

            }
        },
        created(){
            this.getLunbo();
            this.getGoodsInfo()
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
            },
            addToShopCar(){
                this.ballFlag = !this.ballFlag;
                //拼接出要保存到 store 的商品信息
                var goodsinfo = {
                    id: this.id,
                    count: this.selectCount,
                    price: this.goodsinfo.sell_price,
                    selected: true
                };
                this.$store.commit('AddToCar',goodsinfo)
            },
            beforeEnter(el) {
                el.style.transform = "translate(0,0)"
            },
            enter(el){
                //获取小球在页面中位置
                const ballpos = this.$refs.ball.getBoundingClientRect();
                //获取徽标在页面中位置
                const badgepos = document.getElementById('badge').getBoundingClientRect();

                const xDist = badgepos.left - ballpos.left;
                const yDist = badgepos.top - ballpos.top;
                el.offsetWidth;
                el.style.transform = `translate(${ xDist }px, ${ yDist }px)`;
                el.style.transition = 'all 0.6s cubic-bezier(1,1,.79,.95)';

                function done() {}
                done();
            },
            afterEnter(){
                this.ballFlag =! this.ballFlag
            },
            getSelectCount(count){
                this.SelectCount = count;
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
    .ball{ position:absolute; z-index:99 ; top:380px; left:146px;width: 20px;height: 20px; border-radius: 10px; background: #ff5053; opacity: 1}

}
</style>