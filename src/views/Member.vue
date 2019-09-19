<template>
  <div class="member">
    <h3>会员中心</h3>
    <mt-button type="primary" @click="openPicker">选择生日</mt-button>
    <mt-datetime-picker
            ref="picker"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日">
    </mt-datetime-picker>
  </div>
</template>
<script>
  export default {
    name: "member",
    data() {
      return {
      }
    },
    mounted() {},
    created() {},
    methods: {
      openPicker() {
        this.$refs.picker.open();
      }
    },
    components: {}
  }

</script>

<style lang="scss" scoped>

</style>