import { reactive } from 'vue'


export const store = reactive({
    query: '',
    Api_Key: 'b827cbb1c5cb24c27d027485053cd86e',
    films: [],
    series: [],
    people: [],
    getStarRate(rateNum) {
        return Math.ceil(rateNum / 2);
    },
    getRate(vote) {
        const rate = Math.ceil(vote / 2)
        return 5 - rate
    },

    flags: {
        it: '/italia.png',
        uk: '/un.jpg',
        en: '/America.png',
    }
})