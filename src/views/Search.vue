<template>
  <div class="search">
    <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="搜索">
    </mt-search>
  </div>
</template>
<script>
  export default {
    name: "search",
    data() {
      return {
        value:''
      }
    },
    mounted() {},
    created() {},
    methods: {},
    components: {}
  }

</script>

<style lang="scss">
.search{
  .mint-searchbar-core {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    outline: 0;
    margin: 0;
    background: transparent;
  }
}
</style>