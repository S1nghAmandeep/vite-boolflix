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
  }
}
</script>

<template></template>

<style lang="scss">
@use './styles/general.scss'
</style>
