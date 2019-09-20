<template>
    <div class="shopcar">
        <div class="goodslist">
            <div class="shop-card" v-for="(item,i) in goodslist" :key="item.id">

                <van-swipe-cell>
                    <template slot="default">
                        <div class="card-content">

                            <div class="card-box">
                                <van-switch
                                        v-model="$store.getters.getGoodsSelected[item.id]"
                                        @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"
                                        size="20px"
                                        active-color="#ff6034"
                                ></van-switch>
                            </div>
                            <div>
                                <img :src="item.thumb_path" alt="图片加载失败！">
                            </div>

                            <div class="info">
                                <h1>{{ item.title }}</h1>
                                <p class="box">
                                    <span class="price">￥{{ item.sell_price }}</span>
                                    <numbox :initcount="$store.getters.getGoodsCount[item.id]"
                                            :goodsid="item.id"></numbox>
                                </p>
                            </div>
                        </div>
                    </template>
                    <template slot="right">
                        <van-button square type="danger" @click.prevent="del(item.id, i)" text="删除"/>
                    </template>
                </van-swipe-cell>


            </div>
        </div>

        <van-submit-bar class="jiesuan"
                        :price="$store.getters.getGoodsCountAmount.amount"
                        button-text="去结算"
        >
            <div class="tips">
                已选中商品 <span class="red">{{ $store.getters.getGoodsCountAmount.count }}</span> 件
            </div>

        </van-submit-bar>


    </div>
</template>
<script>
    import numbox from "../components/shopcar_numberbox";
    import Vue from 'vue';
    import {SubmitBar, Switch, ActionSheet} from 'vant';
    import { SwipeCell } from 'vant';
    import { Cell, CellGroup } from 'vant';

    Vue.use(Cell).use(CellGroup);

    Vue.use(SwipeCell);

    Vue.use(SubmitBar).use(Switch).use(ActionSheet);
    export default {
        name: "shopcar",
        data() {
            return {
                goodslist: []

            }
        },
        mounted() {
        },
        created() {
            this.getGoodsList()
        },
        methods: {
            getGoodsList() {
                var idArr = [];
                this.$store.state.car.forEach(item => idArr.push(item.id));
                if (idArr.length <= 0) {
                    return;
                }
                this.axios.get('api/goods/getshopcarlist/' + idArr.join(",")).then(result => {
                    if (result.data.status === 0) {
                        this.goodslist = result.data.message;
                    }
                })
            },
            del(id, index) {
                //点击删除，将商品从store中根据传递的ID 删除，同时 把当前组件中的goodslist中对应的数据根据index删除
                this.goodslist.splice(index, 1);

                this.$store.commit('RemoveFromCar', id)

            },
            selectedChanged(id, value) {
                this.$store.commit("UpdateGoodsSelected", {id, selected: value});
            }
        },
        components: {
            numbox
        }
    }


</script>

<style lang="scss">
    .shopcar {
        .goodslist {
            padding-bottom: 60px;

            .shop-card {
                font-size: 14px;
                position: relative;
                overflow: hidden;
                margin: 10px;
                border-radius: 5px;
                background-color: white;
                background-clip: padding-box;
                -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
                box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
                .van-button--danger{
                    height: 100%;
                }
            }

            .card-content {
                position: relative;
                padding: 15px;
                display: flex;
                align-items: center;

                img {
                    width: 60px;
                    height: 60px;
                    margin: 0 5px;
                }

                h1 {
                    font-size: 13px;
                }

                .info {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    justify-content: space-between;

                    .box {
                        display: flex;
                        justify-content: space-between;
                        margin: 5px 0;
                        line-height: 28px;
                    }

                    .price {
                        color: #ff5053;
                        font-weight: bold;
                        margin-right: 5px;
                    }
                }
            }
        }

        .jiesuan {
            bottom: 52px;
            border-bottom: 2px solid #c7c7cc;

            .tips {
                padding-left: 5px;

                .red {
                    color: #ff5053;
                    font-weight: bold;
                }

            }
        }


    }

</style>
