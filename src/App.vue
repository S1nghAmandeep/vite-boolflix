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

      if (!this.store.query) {
        this.store.films = [];
        this.store.series = [];
        this.people = [];
        return
      }

      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.store.Api_Key,
          query: this.store.query,
          language: 'it-IT'
        }
      }).then(res => {
        this.store.films = res.data.results

        store.films.forEach(item => {
          const credits = item.id
          axios.get(`https://api.themoviedb.org/3/movie/${credits}/credits`, {
            params: {
              api_key: this.store.Api_Key,
            }
          }).then(res => {
            this.store.people = res.data.cast.slice(0, 5)
            console.log(this.store.people);
          })
        });
        this.store.query = ''
        // console.log(res.data.results);

      });

      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: this.store.Api_Key,
          query: this.store.query,
          language: 'it-IT'
        }
      }).then(ans => {
        const series = ans.data.results
        series.forEach(item => {
          item.titile = item.name
          item.original_title = item.original_name
        });
        this.store.series = series
        this.store.query = ''
        // console.log(series);
      });

    },


  },
  mounted() {

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
