<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <FilterDataComponent />
    <AddDataComponent />
    <router-view />
  </div>
</template>

<script>
import AddDataComponent from './components/AddDataComponent'
import FilterDataComponent from './components/FilterDataComponent'

export default {
  created: function() {
    this.$store.dispatch("fetchData");
  },
  components: {
    AddDataComponent,
    FilterDataComponent
  },
  data: function() {
    return {
      title: "菜鸟驿站"
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
