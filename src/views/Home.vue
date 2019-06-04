<template>
  <div class="home container">
    <div class="row">
      <div class="col">
        <h1>
          MO
          <img alt="Vue logo" src="../assets/logo.png">IES
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="searchMovies">
          <input type="text" placeholder="Search for Movie Title" v-model="query">
          <button type="submit">SEARCH</button>
        </form>
      </div>
    </div>
    <div class="row">
      <results/>
      <active-movie/>
    </div>
  </div>
</template>

<script>
import Results from "../components/Results.vue";
import ActiveMovie from "../components/ActiveMovie.vue";

export default {
  name: "home",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    searchMovies() {
      this.$store.dispatch("searchApi", this.query);
    }
  },
  components: {
    Results,
    ActiveMovie
  }
};
</script>

<style scoped>
h1 img {
  height: 1.5rem;
}

.home {
  background-color: greenyellow;
}
</style>
