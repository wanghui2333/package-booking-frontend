import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)
const url = "http://localhost:9090/express";
export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    initData: function (state, data) {
      console.log(data);
      state.data = data;
    }
  },
  actions: {
    fetchData: function (context) {
      axios.get(url).then(function (response) {
        context.commit("initData", response.data);
      });
    },
    addData: function (context) {
      axios.post(url, {
        "id": "5",
        "name": "sswang2hui",
        "phone": "aasd",
        "status": "done",
        "date": "2019-09-05 16:18:34"
      }).then(function (response) {
        console.log(31, response.data);
        context.dispatch("fetchData");
      });
    }
  }
})
