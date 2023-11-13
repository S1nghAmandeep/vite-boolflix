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
    <main class="card">
        <section>
            <h1 class="card_title">Film </h1>
            <div class="card_film">
                <div v-for="(items, i) in store.films" :key="i">
                    <AppCardFilm :detail="items" />
                </div>
            </div>
        </section>
        <section>
            <h1 class="card_title">Serie Tv</h1>
            <div class="card_series">
                <div v-for="(show, i) in store.series" :key="i">
                    <AppCardSerie :showsInfo="show" />
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;

    .card_title {
        padding-left: 40px;
        color: red;
        font-size: 40px;
    }
}

.card_film {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    color: red;
    padding: 40px;
}

.card_series {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    color: red;
    padding: 40px;
}
</style>