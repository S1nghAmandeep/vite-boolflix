<script>
import { store } from '../store';

export default {
    props: {
        showsInfo: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            store,
            showInfo: ''
        }
    },
    methods: {
        onHover(id) {
            this.showInfo = id
        },

        leaveHover() {
            this.showInfo = ''
        }
    },
    mounted() {

    }
}
</script>

<template>
    <div @mouseenter="onHover(showsInfo.id)" @mouseleave="leaveHover()" class="card">
        <img class="cover" :src="`https://image.tmdb.org/t/p/w342${showsInfo.backdrop_path}`" alt="">
        <div v-if="showInfo === showsInfo.id" class="card_hover">
            <ul class="info_card">
                <li>Titolo: {{ showsInfo.name }}</li>
                <li>Titolo originale: {{ showsInfo.original_name }}</li>
                <li>
                    <span> {{ showsInfo.original_language }} </span>
                </li>
                <li>
                    <div>
                        Vote:
                        <span class="vote-icon" v-for="star in store.getStarRate(showsInfo.vote_average)">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </span>
                        <span class="vote-icon" v-for="vote in store.getRate(showsInfo.vote_average)">
                            <font-awesome-icon icon="fa-regular fa-star" />
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- <div>
        <img :src="`https://image.tmdb.org/t/p/w342${showsInfo.backdrop_path}`" alt="">
        <h4>{{ showsInfo.name }}</h4>
        <h4>{{ showsInfo.original_name }}</h4>
        <div>
            <img v-if="showsInfo.original_language === 'uk'" class="flags" src="uk.png" alt="">
            <img v-else-if="showsInfo.original_language === 'en'" class="flags" src="America.png" alt="">
            <img v-else-if="showsInfo.original_language === 'it'" class="flags" src="italia.png" alt="">
            <p v-else>{{ showsInfo.original_language }}</p>
        </div>
        <span v-for="star in store.getStarRate(showsInfo.vote_average)">
            <font-awesome-icon icon="fa-solid fa-star" />
        </span>
        <span v-for="vote in store.getRate(showsInfo.vote_average)">
            <font-awesome-icon icon="fa-regular fa-star" />
        </span>
    </div> -->
</template>

<style lang="scss" scoped>
.card {
    position: relative;

    .cover {
        height: 280px;
        width: 180px;
        object-fit: cover;
    }

    .card_hover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.8);
    }
}

.info_card {
    font-size: 13px;
    line-height: 22px;
    color: white;
    padding: 20px 10px;

    .vote-icon {
        color: yellow;
    }
}
</style>