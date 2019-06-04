import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query="
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMovie: {},
    results: []
  },
  mutations: {
    setResults(state, data) {
      state.results = data
    },
    setActiveMovie(state, data) {
      state.activeMovie = data
    }
  },
  actions: {
    searchApi({ commit, dispatch }, query) {
      _api.get(query)
        .then(res => {
          let data = res.data.results
          commit('setResults', data)
        })
    },
    // async searchApi({commit, dispatch}, query){
    //  try{
    //   let res = await _api.get(query)
    //    commit('setResults', res.data.results)
    //  }      
    // }
    setActiveMovie({ commit, dispatch }, movie) {
      commit('setActiveMovie', movie)
    }
  }
})
