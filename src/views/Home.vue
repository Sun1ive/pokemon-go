<template>
  <b-container>
    <b-row align-v="center" align-h="center">
      <h1>Pokedesk</h1>
    </b-row>
    <b-row>
      <b-col cols="4">
        <PokeCard/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import PokeCard from '@/components/PokeCard.vue';

export default Vue.extend({
  name: 'home',
  components: { PokeCard },
  created() {
    this.$store.dispatch('fetchData');
  },
});
</script>
