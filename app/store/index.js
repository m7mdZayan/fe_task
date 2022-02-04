import Vuex from 'vuex';
import Vue from 'vue';
import Chart from './modules/chart';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Chart,
  },
});

export default store;
