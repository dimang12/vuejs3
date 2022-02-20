import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./assets/css/app.scss";

createApp(App)
    .use(VueAxios, axios)
    .use(store)
    .use(router)
    .mount('#app');
