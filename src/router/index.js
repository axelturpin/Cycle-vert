import App from "@/App.vue";
import AccueilClient from "@/client/AccueilClient.vue";
import NotifClient from "@/client/NotifClient.vue";
import Connexion from "@/components/Connexion.vue";
import { createRouter, createWebHashHistory } from "vue-router";

//définir les routes

const roads = [
    {
        path: "/",
        name: "connexion",
        component: Connexion
    },
    {
        path: "/accueil-client",
        name: "AccueilClient",
        component: AccueilClient
    },
    {
        path: "/notifications-client",
        name: "NotifClient",
        component: NotifClient
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
