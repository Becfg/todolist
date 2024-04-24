import {createRouter, createWebHashHistory} from "vue-router";
import Homepage from "../view/Homepage.vue";
import todolist from "../view/todolist.vue";
import about from "../view/about.vue";
import login from "../view/login.vue";
import { userStore } from '../stores/user';


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
        },
        {
            path:"/login",
            name:"login",
            component: login
        }
    ]
});

//白名单
const whileList = ['/',"/login"];

// router.beforeEach((to,_form,next)=>{
//     if (whileList.includes(to.path)||userStore().isAuthenticated){
//         next()
//     }else {
//         alert("未登录,即将跳转登录页");
//         next("/login")
//     }
// })
export default router;