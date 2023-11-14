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
            showInfo: '',

        }
    },
    methods: {
        onHover(id) {
            this.showInfo = id
            // console.log(id);
        },

        leaveHover() {
            this.showInfo = ''
        }
    },
    computed: {
        scrFlags() {
            return this.store.flags[this.detail.original_language]
        }
    }
}
</script>

<template>
    <div @mouseenter="onHover(detail.id)" @mouseleave="leaveHover()" class="card">
        <img class="cover" :src="`https://image.tmdb.org/t/p/w342${detail.poster_path}`" alt="">
        <img class="nullImg" v-if="detail.poster_path === null" src="/bg.png" alt="">
        <div v-if="showInfo === detail.id" class="card_hover">
            <ul class="info_card">
                <li>Titolo: {{ detail.title }}</li>
                <li>Titolo originale: {{ detail.original_title }}</li>
                <li>
                    Lang:
                    <img v-if="scrFlags" class="flags" :src="scrFlags" alt="">
                    <span v-else>{{ detail.original_language }}</span>
                </li>
                <li>
                    <div>
                        Vote:
                        <span class="vote-icon" v-for="star in store.getStarRate(detail.vote_average)">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </span>
                        <span class="vote-icon" v-for="vote in store.getRate(detail.vote_average)">
                            <font-awesome-icon icon="fa-regular fa-star" />
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    position: relative;
    height: 280px;
    width: 180px;

    .cover {
        height: 280px;
        // width: 180px;
        // object-fit: cover;
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

.nullImg {
    position: absolute;
    height: 280px;
}
</style>