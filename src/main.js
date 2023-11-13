import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faStar, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(faStar, farStar, faBell, faCaretDown);
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
