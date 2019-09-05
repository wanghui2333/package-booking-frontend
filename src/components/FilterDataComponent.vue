<template>
  <div>
    <a-button @click="statusChange('ALL')">ALL</a-button>
    <a-button @click="statusChange('已预约')">已预约</a-button>
    <a-button @click="statusChange('已取件')">已取件</a-button>
    <a-button @click="statusChange('未取件')">未取件</a-button>
  </div>
</template>

<script>
export default {
  name: "FilterDataComponent",
  methods: {
    statusChange: function(status) {
      this.$store.state.currentFilterStatus = status;
    }
  },
};
</script>

<style scoped>

</style>