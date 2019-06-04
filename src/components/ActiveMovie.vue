<template>
  <div class="active-movie col-6">
    <movie-poster :movie="activeMovie"/>
  </div>
</template>


<script>
import MoviePoster from "./MoviePoster.vue";

export default {
  name: "ActiveMovie",
  data() {
    return {};
  },
  computed: {
    activeMovie() {
      return this.$store.state.activeMovie;
    }
  },
  components: {
    MoviePoster
  }
};
</script>


<style>
.active-movie {
  background-color: lightsalmon;
}
</style>
