import Vue from 'vue';
import Vuex from 'vuex';
import API_MODULE from './modules/api';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    API_MODULE,
  },
});
