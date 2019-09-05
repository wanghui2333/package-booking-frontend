import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)
const url = "http://localhost:9090/express";
export default new Vuex.Store({
  state: {
    data: [],
    currentFilterStatus: "ALL"
  },
  mutations: {
    initData: function (state, data) {
      state.data = data;
    }
  },
  actions: {
    fetchData: function (context) {
      axios.get(url).then(function (response) {
        context.commit("initData", response.data);
      });
    },
    addData: function (context, data) {
      axios.post(url, data).then(function (response) {
        context.dispatch("fetchData");
      });
    }
  },
  getters: {
      filterData: function (state) {
          let filterList = state.data.filter(element => {
              return (
                  state.currentFilterStatus === "ALL" ||
                  state.currentFilterStatus === element.status
              )
          });
          return filterList;
      }
  }
})
