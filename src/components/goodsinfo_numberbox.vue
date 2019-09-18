<template>
    <div class="mui-numbox" data-numbox-min='1' >
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1"
               @change="CountChange" ref="numbox" />
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
                this.$emit('Getcount',parseInt(this.$refs.numbox.value));
            }
        },
        props: [
            "max"
        ],
        watch: { //属性监听 监听 max
            max: function(newVal){
                mui(".mui-numbox").numbox().setOption("max",newVal)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>