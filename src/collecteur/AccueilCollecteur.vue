<script>
export default{
  data(){
    return {
      planingTemplate: null,
      itinéraireTemplate: null,
      Accueiltemp: "/accueil-collecteur"
    }
  },
  methods:{
    planing(){
        this.planingTemplate.style.display = "block";
        this.itinéraireTemplate.style.display = "none";
        const menu = document.querySelector(".menu-collecteur");
        menu.style.display = "none";
    },
    itinéraire(){
        this.planingTemplate.style.display = "none";
        this.itinéraireTemplate.style.display = "block";
        const menu = document.querySelector(".menu-collecteur");
        menu.style.display = "none";
    },
    switch2(){
        const menu = document.querySelector(".menu-collecteur");
        if(menu.style.display == "block"){
            menu.style.display = "none";
        }else{
            menu.style.display = "block";
        }
    }
  },
  mounted(){
    this.planingTemplate = document.querySelector(".planing");
    this.itinéraireTemplate = document.querySelector(".itinéraire");
    this.planing();
  },
  // props:["Accueil"]
      provide() {
      return {
        Accueiltemp: this.Accueiltemp
      }
    }
}
</script>

<template>
    <header>
        <router-link :to="this.Accueiltemp || this.Accueil"><img src="/img/Home Page.png" alt="Accueil"></router-link>
        <h1 class="col-center">Cycle vert</h1>
        <router-link to="/notifications-client"><img src="/img/Doorbell.png" alt="Notifications"></router-link>
    </header>

    <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>

    <div class="col-center">
    <button class="center top50 big-btn" @click="switch2">Menu</button>
    </div>

    <div class="center top50 menu-collecteur">
        <div @click="planing">collectes</div>
        <div @click="itinéraire">Itinéraire</div>
        <div>Suivi anomalies</div>
        <div>Informer</div>
    </div>

    <div class="planing">
      <h3 class="center top50">Planing</h3>
      <table class="col-center top50">
          <thead>
              <tr>
                  <th>Lieu</th>
                  <th>Date</th>
                  <th>Heure</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Paris</td>
                  <td>26/05/2026</td>
                  <td>12h01</td>
              </tr>
              <tr>
                  <td>Dinard</td>
                  <td>26/12/2026</td>
                  <td>15h15</td>
              </tr>
          </tbody>
      </table>
    </div>

    <div class="itinéraire">
      <h3 class="center top50">itinéraire</h3>
    </div>

</template>

<style scoped>
.switch{
    background-color: #A3B18A;
    border: 1px solid black;
    width: 180px;
    height: 36px;
}

.switch:focus{
    opacity: 0.64;
}

.menu-collecteur{
    display: none;
    position: absolute;
}

table {
  border-collapse: collapse;
  background-color: #F3E5AB;
}

thead,
tfoot {
  background-color: #F3E5AB;
}

th{
    border: 2px solid black;
    padding: 8px 10px;
}

td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr{
  background-color: #FAF3E0;
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}

    .menu-collecteur{
        background-color: #A3B18A;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        top: calc(92px + 210px);
        left: 50vw;
        border-radius: 0px 0px 20px 20px;
        z-index: 2;
    }

    .menu-collecteur *{
        width: 100px;
        height: 48px;
        border: 1px solid black;
    }

    .menu-collecteur *:last-child{
        border-radius: 0px 0px 20px 20px;
    }

</style>