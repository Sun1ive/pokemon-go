<template>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2">
    <b-badge>New</b-badge>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    // pokemon: {
    //   type: Object,
    //   required: true,
    // },
  },
});
</script>
