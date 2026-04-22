import App from "@/App.vue";
import Connexion from "@/components/Connexion.vue";
import { createRouter, createWebHashHistory } from "vue-router";

//définir les routes

const roads = [
    {
        path: "/connexion",
        name: "connexion",
        component: Connexion
    },
    // {
    //     path: "/",
    //     name: "App",
    //     component: App
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: roads
})


export default router
