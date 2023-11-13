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
            <h1 class="card_title">Boolflix Film</h1>
            <div class="card_film">
                <div v-for="(items, i) in store.films" :key="i">
                    <AppCardFilm :detail="items" />
                </div>
            </div>
            <p class="no-risult" v-if="store.films.length === 0">Nessun risultato</p>
        </section>
        <section>
            <h1 class="card_title">Boolflix Serie Tv</h1>
            <div class="card_series">
                <div v-for="(show, i) in store.series" :key="i">
                    <AppCardSerie :showsInfo="show" />
                </div>
            </div>
            <p class="no-risult" v-if="store.films.length === 0">Nessun risultato</p>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;

    .card_title {
        padding: 20px 0 0 40px;
        color: rgb(255, 255, 255);
        font-size: 30px;
    }

    .no-risult {
        text-align: center;
        color: white;
        font-size: 20px;
    }
}

.card_film {
    display: flex;
    // flex-wrap: wrap;
    overflow-x: scroll;
    gap: 10px;
    color: red;
    padding: 20px 40px;
}

.card_series {
    display: flex;
    // flex-wrap: wrap;
    overflow-x: scroll;
    gap: 10px;
    color: red;
    padding: 20px 40px;
}
</style>