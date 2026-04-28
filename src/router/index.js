import App from "@/App.vue";
import AccueilClient from "@/client/AccueilClient.vue";
import AjoutCollecte from "@/client/AjoutCollecte.vue";
import NotifClient from "@/client/NotifClient.vue";
import Connexion from "@/components/Connexion.vue";
import AccueilValorisateur from "@/valorisateur/AccueilValorisateur.vue";
import AjoutAndain from "@/valorisateur/AjoutAndain.vue";
import NotifValorisateur from "@/valorisateur/NotifValorisateur.vue";
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
        component: AccueilClient,
        meta: { Accueil: '/accueil-client' }
    },
    {
        path: "/notifications-client",
        name: "NotifClient",
        component: NotifClient
    },
    {
        path: "/ajout-client",
        name: "AjoutCollecte",
        component: AjoutCollecte
    },
    {
        path: "/accueil-valorisateur",
        name: "AccueilValorisateur",
        component: AccueilValorisateur,
        meta: { Accueil: '/accueil-valorisateur' }
    },
    {
        path: "/ajout-andain",
        name: "AjoutAndain",
        component: AjoutAndain
    },
    {
        path: "/notifications-valorisateur",
        name: "NotifValorisateur",
        component: NotifValorisateur
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: roads
})


export default router
