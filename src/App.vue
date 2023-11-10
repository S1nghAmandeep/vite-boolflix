<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from './store'
import axios from 'axios'


export default {
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      store,
    }
  },
  methods: {
    searchFilm() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.store.Api_Key,
          query: this.store.query
        }
      }).then(res => {
        this.store.films = res.data.results
        this.store.query = ''
        console.log(res.data.results);
      })
    }
  },
  mounted() {
    console.log(this.store.films);
  }
}
</script>

<template>
  <AppHeader @search="searchFilm" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
