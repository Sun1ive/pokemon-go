<template>
  <b-container>
    <b-row align-v="center" align-h="center">
      <h1>Pokedesk</h1>
    </b-row>
    <b-row>
      <b-col
        cols="3"
        v-for="pokemon in pokemonList"
        :key="pokemon.modified"
      >
        <PokeCard :pokemon="pokemon" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import PokeCard from '@/components/PokeCard.vue';
import * as T from '@/@types';

export default Vue.extend({
  name: 'home',
  components: { PokeCard },
  created() {
    this.$store.dispatch('fetchData');
  },
  computed: {
    pokemonList(): T.PokemonList[] {
      return this.$store.getters.getPokemonList;
    },
  },
});
</script>
