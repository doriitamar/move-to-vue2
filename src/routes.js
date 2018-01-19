import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import MapView from './views/Map.vue';

let routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/map',
        component: MapView
    }
];

export default new VueRouter({
    routes
});