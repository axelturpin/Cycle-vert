<script>
export default{
    data(){
        return{
            Accueiltemp: '/accueil-client',
            collectes: [],
            date: "",
            heure: ""
        }
    },
    provide() {
      return {
        Accueiltemp: this.Accueiltemp,
      }
    },
    methods:{
        local(){
            let storage = JSON.parse(localStorage.getItem("Collectes")) || [];
            this.collectes = Array.isArray(storage) ? storage : [];
            let collecte = {data: this.date, heure: this.heure};
            this.collectes.push(collecte);
            localStorage.setItem("Collectes", JSON.stringify(this.collectes));
        }
    }
}</script>

<template>
        <header>
        <router-link :to="this.Accueiltemp || this.Accueil"><img src="/img/Home Page.png" alt="Accueil"></router-link>
        <h1 class="col-center">Cycle vert</h1>
        <router-link to="/notifications-client"><img :class="{notif: true}" src="/img/Doorbell.png" alt="Notifications"></router-link>
    </header>
    <div>
        
        <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>
    </div>


        <div class="col-center top50 block">
        <h2>Ajout collecte</h2>
        <form action="">
            <div class="col-center">
                <label for="date" class="col-center">Date</label>
                <div><input type="date" name="" id="date" v-model="date"></div>
            </div>
            <div class="col-center">
                <label for="time" class="col-center">Heure</label>
                <div><input type="time" name="" id="time" v-model="heure"></div>
            </div>

            <button type="submit" class="big-btn" @click="local">Ajout</button>
        </form>

        </div>
</template>