import api from '@/api';

const state = {};
const mutations = {};
const actions = {
  async fetchData({ commit }: any) {
    try {
      const { data } = await api.get('api/v1/pokemon/?limit=12');
      console.log(data);
    } catch ({ error }) {
      throw error;
    }
  },
};
const getters = {};

export default { state, mutations, actions, getters };
