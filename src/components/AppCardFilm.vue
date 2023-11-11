<script>
import { store } from '../store'

export default {
    props: {
        detail: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            store,

        }
    },
    methods: {

    },
    mounted() {
        console.log(this.detail);
    }
}
</script>

<template>
    <img :src="`https://image.tmdb.org/t/p/w342${detail.backdrop_path}`" alt="">
    <h4>{{ detail.title }}</h4>
    <h4>{{ detail.original_title }}</h4>
    <div>
        <img v-if="detail.original_language === 'uk'" class="flags" src="uk.png" alt="">
        <img v-else-if="detail.original_language === 'en'" class="flags" src="America.png" alt="">
        <img v-else-if="detail.original_language === 'it'" class="flags" src="italia.png" alt="">
        <p v-else>{{ detail.original_language }}</p>
    </div>
    <div>
        <span v-for="star in store.getStarRate(detail.vote_average)">
            <font-awesome-icon icon="fa-solid fa-star" />
        </span>
        <span v-for="vote in store.getRate(detail.vote_average)">
            <font-awesome-icon icon="fa-regular fa-star" />
        </span>
    </div>
</template>

<style lang="scss" scoped></style>