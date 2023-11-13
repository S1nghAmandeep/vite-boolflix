<script>
import { store } from '../store'

export default {

    data() {
        return {
            store,
        }
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <nav class="row items item-center">
            <div>
                <ul class="row item">
                    <li><img class="logo" src="/logo.png" alt=""></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serie TV</a></li>
                    <li><a href="#">Film</a></li>
                    <li><a href="#">Original</a></li>
                    <li><a href="#">Aggiunti di recente</a></li>
                    <li><a href="#">La mia lista</a></li>
                </ul>
            </div>
            <div>
                <ul class="row item">
                    <li><input class="search-bar" type="text" @keyup.enter="$emit('search')" placeholder="Cerca"
                            v-model.trim="store.query">
                    </li>
                    <li><a href="#">Bambini</a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-solid fa-bell" /></a></li>
                    <li class="row">
                        <img height="20" src="/profile.jpg" alt="">
                        <a class="icon-profile" href="#"><font-awesome-icon icon="fa-solid fa-caret-down" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 20px;
    color: white;
}

.items {
    justify-content: space-between;

    .item {
        gap: 20px;
    }
}


.logo {
    height: 30px;
    display: block;
}

.search-bar {
    padding: 5px;
    border-radius: 50px;
    border: none;
    background-color: rgb(255, 255, 255);
}

.icon-profile {
    margin-left: 10px;
}
</style>