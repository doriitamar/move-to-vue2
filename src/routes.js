import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import RealTimeMap from './views/RealTimeMap.vue';

let routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/map',
        component: RealTimeMap
    }
];

export default new VueRouter({
    routes
});