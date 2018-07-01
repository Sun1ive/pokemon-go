<template>
    <b-card
      :title="pokemon.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2">
      <b-badge
        v-for="type in pokemon.types"
        :key="type.name"
      >{{ type.name }}</b-badge>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="stylus" scoped>
.badge
  font-size 1.4rem
  margin 0 .2rem
.card-body
  text-align center
</style>
