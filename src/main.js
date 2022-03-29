import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/routes';
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

let router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const app = createApp(App);
app.use(router).use(VueChartkick);
app.mount('#app');
