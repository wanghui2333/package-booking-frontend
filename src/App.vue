<template>
  <div id="app">
    
    <AddData />
    <!-- <Home/> -->
    <router-view />
  </div>
</template>

<script>
import AddData from './components/AddData'
export default {
  created: function() {
    this.$store.dispatch("fetchData");
  },
  components: {
    AddData
  },
  methods: {
    add: function() {
      this.$store.dispatch("addData");
    },
    showModal: function () {
      this.visible = true;
    }
  },
  data: function () {
    return {
      visible: false,
      confirmLoading: false
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
