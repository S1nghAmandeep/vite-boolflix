<script>
import { store } from '../store'

export default {

    data() {
        return {
            store,
        }
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <input type="text" @keyup.enter="$emit('search')" v-model="store.query">
        <button @click="$emit('search')">Serach</button>
    </header>
</template>

<style lang="scss" scoped></style>