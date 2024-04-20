import {defineStore} from "pinia";
import {ref} from "vue";

export const  userStore = defineStore("user",() =>{
    const user = ref({
    username: "",
    password: ""
})
    const setUser = (username:string,password:string) => {
        user.value.username = username
        user.value.password = password
    }
    const getUser = () => {
        return user.value
    }
    const removeUser = () => {
        user.value.username = ""
        user.value.password = ""
    }

    const changeAuth = (state:boolean)=>{
        isAuthenticated.value = state
    }

    const isAuthenticated = ref(false)
    return {
        user,setUser,getUser,removeUser,changeAuth,isAuthenticated
    }
})