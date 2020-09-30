import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App2 from '../components/app2'
import Test2 from '../components/Test2'
import Testhome from '../components/TestHome'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/' ,
            name: 'test2',
            component: Test2
        },
        {
            path: '/TestHome',
            name: 'testhome',
            component: Testhome,
        },
    ],
});

const app2 = new Vue({
    el: '#app2',
    components: { App2 },
    router,
});
