<template>
  <div class="shopcar">
    <div class="goodslist">
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
                    v-model="$store.getters.getGoodsSelected[item.id]"
            @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.thumb_path" alt="图片加载失败！">
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="del(item.id, i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jiesuan">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuancon">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAmount.count }}</span> 件，总价 <span  class="red">￥{{ $store.getters.getGoodsCountAmount.amount }}</span></p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>

      </div>
    </div>



  </div>
</template>
<script>
  import numbox from "../components/shopcar_numberbox";
  export default {
    name: "shopcar",
    data() {
      return {
        goodslist: []

      }
    },
    mounted() {},
    created() {
      this.getGoodsList()
    },
    methods: {
      getGoodsList(){
        var idArr = [];
        this.$store.state.car.forEach(item => idArr.push(item.id));
        if (idArr.length <=0){ return;}
        this.axios.get('api/goods/getshopcarlist/' + idArr.join(",")).then(result =>{
          if(result.data.status === 0){
            this.goodslist = result.data.message;
          }
        })
      },
      del(id, index){
        //点击删除，将商品从store中根据传递的ID 删除，同时 把当前组件中的goodslist中对应的数据根据index删除
        this.goodslist.splice(index, 1);

        this.$store.commit('RemoveFromCar', id)

      },
      selectedChanged(id,value){
        this.$store.commit("UpdateGoodsSelected",{id,selected:value});
      }
    },
    components: {
      numbox
    }
  }

</script>

<style lang="scss">
  .shopcar{
    background-color: #eee;
    overflow: hidden;
    padding-bottom: 100px;
    .goodslist{
      .mui-card-content-inner{
        display: flex;
        align-items: center;
        img{
          width: 60px;
          height: 60px;
          margin:0 5px;
        }
        h1{
          font-size: 13px;
        }
        .info{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p{margin: 5px 0}
          .price{
            color: #ff5053;
            font-weight: bold;
            margin-right: 5px;
          }
        }
      }
    }
    .jiesuan{
      position: fixed;
      bottom: 40px;
      left: 0;
      right: 0;
      .jiesuancon{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{color: #ff5053;font-weight: bold;}

      }

    }
  }

</style>
