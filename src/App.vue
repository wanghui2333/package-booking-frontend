<template>
  <div id="app">
    <a-button @click="add">新增</a-button>
    <Home/>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  created: function() {
    this.$store.dispatch("fetchData");
  },
  methods: {
    add: function() {
      this.$store.dispatch("addData");
    }
  },
  components: {
    Home
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
