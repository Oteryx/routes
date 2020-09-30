import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App3 from '../components/app3'
import Test3 from '../components/Test3'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/' ,
            name: 'test3',
            component: Test3
        },

    ],
});

const app3 = new Vue({
    el: '#app3',
    components: { App3 },
    router,
});
