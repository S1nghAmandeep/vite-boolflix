<script>
import { store } from '../store'
import AppCardFilm from './AppCardFilm.vue';

export default {
    components: {
        AppCardFilm
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main class="row container">
        <section>
            <div v-for="(items, i) in store.films" :key="i">
                <AppCardFilm :detail="items" />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped></style>