<template>
  <div class="results col-6">
    <div class="row">
      <div class="col-12">
        <h1>Results</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ol class="movies">
          <li v-for="movie in movies" :key="movie.id" @click="setActiveMovie(movie)">{{movie.title}}</li>
        </ol>
        <!-- <movie-poster v-for="m in movies" :key="m.id" :movie="m"/> -->
      </div>
    </div>
  </div>
</template>


<script>
import MoviePoster from "./MoviePoster.vue";
export default {
  name: "Results",
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.state.results;
    }
  },
  methods: {
    setActiveMovie(movie) {
      this.$store.dispatch("setActiveMovie", movie);
    }
  },
  components: {
    MoviePoster
  }
};
</script>


<style>
.results {
  background-color: cornflowerblue;
}
.movies {
  color: white;
}
</style>