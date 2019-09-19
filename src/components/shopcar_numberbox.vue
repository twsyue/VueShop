<template>
    <div class="mui-numbox" data-numbox-min='1' >
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount"
               @change="CountChange" ref="numbox" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../assets/lib/mui/js/mui.js';

    export default {
        mounted(){//引入的是在mian.js所以加上this
            mui('.mui-numbox').numbox();
        },
        methods: {
            CountChange(){//文本框数据被修改的时候
                //console.log(this.$refs.numbox.value)
                //todo 这里需要限制最大数量
                this.$store.commit('UpdateGoodsInfo',{
                    id: this.goodsid,
                    count: this.$refs.numbox.value
                })


            }
        },
        props:["initcount", "goodsid"],
        watch: {

        }
    }
</script>

<style lang="scss" scoped>
.mui-numbox{height: 25px;}
</style>