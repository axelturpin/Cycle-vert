<script>
    export default{
        data(){
            return{
                Accueiltemp: '/accueil-admin'
            }
        },
        methods:{
            orga(){
                const menuOrga = document.querySelector(".menu-organisation")
                if(menuOrga.style.display === "block"){
                    menuOrga.style.display = "none"
                }else{
                    menuOrga.style.display = "block";
                }
            },
            stats(){
                const menuStats = document.querySelector(".menu-stats")
                if(menuStats.style.display === "block"){
                    menuStats.style.display = "none"
                }else{
                    menuStats.style.display = "block";
                }
            },
            gestion(){
                const menuUtilisateurs = document.querySelector(".menu-utilisateurs")
                if(menuUtilisateurs.style.display === "block"){
                    menuUtilisateurs.style.display = "none"
                }else{
                    menuUtilisateurs.style.display = "block";
                }
            }
        },
        mounted(){
            document.querySelector(".menu-organisation").style.display = "none";
            document.querySelector(".menu-stats").style.display = "none";
            document.querySelector(".menu-utilisateurs").style.display = "none";
            // document.querySelector("nav").style.display = "block";
        }
    }
</script>

<template>
    <header>
        <router-link :to="this.Accueiltemp || this.Accueil"><img src="/img/Home Page.png" alt="Accueil"></router-link>
        <h1 class="col-center">Cycle vert</h1>
        <router-link to="/notifications-admin"><img :class="{notif: true}" src="/img/Doorbell.png" alt="Notifications"></router-link>
    </header>

    <div class="center div">
        <nav>
            <button class="organisation"@click="orga">Organisation</button>
            <button class="stats" @click="stats">Stats</button>
            <button class="gestion-utilisateurs" @click="gestion">Gestion utilisateurs</button>
        </nav>
    </div>

    <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>

    <div class="center div">
    <div class="menus top90">
        <div class="col-center menu-organisation">
            <router-link to="/gestion-tournees" class="center none">Gestion tournées</router-link>
            <div class="center">Suivi collecte</div>
            <div class="center">Suivi compost</div>
        </div>
        <div class="col-center menu-stats">
            <div class="center">Stats clients</div>
            <div class="center">Stats biodechets</div>
            <div class="center">Stats compost</div>
            <div class="center">Stats collecte</div>
        </div>
        <div class="col-center menu-utilisateurs">
            <div class="center">Gestion collecteurs</div>
            <div class="center">Gestion valorisateurs</div>
            <div class="center">Gestion clients</div>
            <router-link to="/gestion-clients" class="center none">Gestion clients</router-link>
        </div>
    </div>
    </div>



</template>

<style scoped>

    button{
        border: none;
        background-color: #A3B18A;
        padding: 20px 0px;
    }

    .organisation, .stats, .gestion-utilisateurs{
        font-size: 1.2rem;
    }

    .div{
        background-color: #A3B18A;
        width: 100vw;
        height: 40px;
    }

    nav{
        width: 400px;
        gap: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menus{
        gap: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-organisation, .menu-stats, .menu-utilisateurs{
        background-color: #A3B18A;
        position: absolute;
        /* top: calc(92px); */
        border-radius: 0px 0px 20px 20px;
    }

    .menu-organisation{
        top: calc(-80px);
        left: -10vw;
    }
    .menu-stats{
        top: calc(-80px);
        left: -3.5vw;
    }
    .menu-utilisateurs{
        top: calc(-80px);
        left: calc(3vw - 4px);
    }

    .menus * *{
        width: 100px;
        height: 48px;
        border: 1px solid black;
    }

    .menus *:last-child{
        border-radius: 0px 0px 20px 20px;
    }

@media (max-width: 768px) {
    button{
        border: none;
        background-color: #A3B18A;
        padding: 0px 0px;
    }
    .organisation, .stats, .gestion-utilisateurs{
        font-size: 1rem;
    }
    .menu-organisation{
        top: calc(-80px);
        left: -45vw;
    }
    .menu-stats{
        top: calc(-80px);
        left: -14vw;
    }
    .menu-utilisateurs{
        top: calc(-80px);
        left: calc(16vw - 4px);
    }
}
</style>