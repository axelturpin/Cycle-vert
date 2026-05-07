import AccueilAdmin from "@/admin/AccueilAdmin.vue";
import GestionClients from "@/admin/GestionClients.vue";
import GestionTournées from "@/admin/GestionTournées.vue";
import NotifAdmin from "@/admin/NotifAdmin.vue";
import StatsBiodechets from "@/admin/StatsBiodechets.vue";
import StatsClients from "@/admin/StatsClients.vue";
import StatsCollecte from "@/admin/StatsCollecte.vue";
import StatsCompost from "@/admin/StatsCompost.vue";
import App from "@/App.vue";
import AccueilClient from "@/client/AccueilClient.vue";
import AjoutCollecte from "@/client/AjoutCollecte.vue";
import NotifClient from "@/client/NotifClient.vue";
import AccueilCollecteur from "@/collecteur/AccueilCollecteur.vue";
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
    {
        path: "/accueil-collecteur",
        name: "AccueilCollecteur",
        component: AccueilCollecteur,
    },
    {
        path: "/accueil-admin",
        name: "AccueilAdmin",
        component: AccueilAdmin,
    },
    {
        path: "/gestion-tournees",
        name: "GestionTournées",
        component: GestionTournées,
    },
    {
        path: "/notifications-admin",
        name: "NotifAdmin",
        component: NotifAdmin,
    },
    {
        path: "/gestion-clients",
        name: "GestionClients",
        component: GestionClients,
    },
    {
        path: "/stats-collecte",
        name: "StatsCollecte",
        component: StatsCollecte,
    },
    {
        path: "/stats-compost",
        name: "StatsCompost",
        component: StatsCompost,
    },
    {
        path: "/stats-biodechets",
        name: "StatsBiodechets",
        component: StatsBiodechets,
    },
    {
        path: "/stats-clients",
        name: "StatsClients",
        component: StatsClients,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: roads
})


export default router
