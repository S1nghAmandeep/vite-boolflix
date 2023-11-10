<script>

export default {
    props: {
        showsInfo: {
            type: Object,
            required: true
        }
    },

    data() {
        return {

        }
    },
    mounted() {
    }
}
</script>

<template>
    <img :src="`https://image.tmdb.org/t/p/w342${showsInfo.backdrop_path}`" alt="">
    <h4>{{ showsInfo.name }}</h4>
    <h4>{{ showsInfo.original_name }}</h4>
    <div>
        <img v-if="showsInfo.original_language === 'uk'" class="flags" src="uk.png" alt="">
        <img v-else-if="showsInfo.original_language === 'en'" class="flags" src="America.png" alt="">
        <img v-else-if="showsInfo.original_language === 'it'" class="flags" src="italia.png" alt="">
        <p v-else>{{ showsInfo.original_language }}</p>
    </div>
    <p>{{ showsInfo.vote_average }}</p>
</template>

<style lang="scss" scoped></style>