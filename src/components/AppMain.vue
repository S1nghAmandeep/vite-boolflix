<script>
import { store } from '../store'
import AppCardFilm from './AppCardFilm.vue';
import AppCardSerie from './AppCardSerie.vue';

export default {
    components: {
        AppCardFilm,
        AppCardSerie
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main class=" container card">
        <section class="card_film">
            <div v-for="(items, i) in store.films" :key="i">
                <AppCardFilm :detail="items" />
            </div>
        </section>
        <section>
            <div class="card_series" v-for="(show, i) in store.series" :key="i">
                <AppCardSerie :showsInfo="show" />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
}

.card_film {
    flex-basis: calc(100 / 12) * 6;
    color: red;
    border: 1px solid black;
}

.card_series {
    flex-basis: calc(100 / 12) * 6;
    border: 1px solid black;
}
</style>