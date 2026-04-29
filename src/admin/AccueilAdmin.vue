<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            orga(){
                console.log("click");
                document.querySelector(".menu-organisation").style.display = "block";
            },
            stats(){
                console.log("click");
                document.querySelector(".menu-stats").style.display = "block";
            },
            gestion(){
                console.log("click");
                document.querySelector(".menu-utilisateurs").style.display = "block";
            }
        }
    }
</script>

<template>
    <nav>
        <div class="organisation"@click="orga">Organisation</div>
        <div class="stats" @click="stats">Stats</div>
        <div class="gestion-utilisateurs" @click="gestion">Gestion utilisateurs</div>
    </nav>

    <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>

    <div class="menus">
        <div class="center top50 menu-organisation">
            <div>Gestion tournées</div>
            <div>Gestion clients</div>
            <div>Suivi collecte</div>
            <div>Suivi compost</div>
        </div>
        <div class="center top50 menu-stats">
            <div>Stats clients</div>
            <div>Stats biodechets</div>
            <div>Stats compost</div>
            <div>Stats collecte</div>
        </div>
        <div class="center top50 menu-utilisateurs">
            <div>Gestion collecteurs</div>
            <div>Gestion valorisateurs</div>
            <div>Gestion clients</div>
        </div>
    </div>



</template>

<style scoped>
    nav{
        width: 100vw;
        height: 40px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #A3B18A;
    }

    .menu-organisation{
        
    }
</style>