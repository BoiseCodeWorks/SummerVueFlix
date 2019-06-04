<template>
  <div class="movie row">
    <div class="card col" v-if="movie.title">
      <img
        class="card-img-top"
        :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
        alt="Movie Poster"
      >
      <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>
        <p class="card-text">{{movie.overview}}</p>
        <a href="#" class="btn btn-primary">Add to Favorites</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MoviePoster",
  props: ["movie"],
  data() {
    return {};
  }
};
</script>