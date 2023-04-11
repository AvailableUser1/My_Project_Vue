import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue';
import Me from '../views/Me.vue';
import Fit from '../views/Fit.vue'


const routes = [
    { path: "/", component: Home },
    { path: "/me", component: Me },
    { path: "/fit", component: Fit },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
