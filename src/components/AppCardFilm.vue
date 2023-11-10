<script>

export default {
    props: {
        detail: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

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
    <h4>{{ detail.title }}</h4>
    <h4>{{ detail.original_title }}</h4>
    <div>
        <img v-if="detail.original_language === 'uk'" class="flags" src="uk.png" alt="">
        <img v-else-if="detail.original_language === 'en'" class="flags" src="America.png" alt="">
        <img v-else-if="detail.original_language === 'it'" class="flags" src="italia.png" alt="">
        <p v-else>{{ detail.original_language }}</p>
    </div>
    <p>{{ detail.vote_average }}</p>
</template>

<style lang="scss" scoped></style>