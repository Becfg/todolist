import {createRouter, createWebHashHistory} from "vue-router";
import Homepage from "../view/Homepage.vue";
import todolist from "../view/todolist.vue";
import about from "../view/about.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: Homepage
        },
        {
            path: '/todolist',
            name: 'todolist',
            component: todolist
        },
        {
            path: '/about',
            name: 'about',
            component: about
        }
    ]
});
export default router;