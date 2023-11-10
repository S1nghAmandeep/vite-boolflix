<script>

export default {
    props: {
        detail: {
            type: Array,
            required: true
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        console.log(this.detail);
    }
}
</script>

<template>
    <h4>{{ detail.title }}</h4>
    <h4>{{ detail.original_title }}</h4>
    <p>{{ detail.original_language }}</p>
    <p>{{ detail.vote_average }}</p>
    <h1>ciao</h1>
</template>

<style lang="scss" scoped></style>