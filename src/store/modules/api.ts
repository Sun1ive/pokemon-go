import api from '@/api';
import * as T from '@/@types';

interface State {
  limit: number;
  pokemonList: T.PokemonList[];
}

const state = {
  limit: 0,
  pokemonList: [],
} as State;

const mutations = {
  setLimit(state: State, limit: number) {
    state.limit = limit;
  },
  setPokemonList(state: State, pokemons: T.PokemonList[]) {
    state.pokemonList = pokemons;
  },
};
const actions = {
  async fetchData({ commit }: any, limit = 12) {
    try {
      const { data } = await api.get(`api/v1/pokemon/?limit=${limit}`);
      commit('setPokemonList', data.objects);
    } catch ({ error }) {
      throw error;
    }
  },
};
const getters = {};

export default { state, mutations, actions, getters };
