<script>
export default{
  data(){
    return {
      planingTemplate: null,
      historiqueTemplate: null,
      Accueiltemp: '/accueil-client'
    }
  },
  methods:{
    planing(){
      this.planingTemplate.style.display = "block";
      this.historiqueTemplate.style.display = "none";
    },
    historique(){
      this.planingTemplate.style.display = "none";
      this.historiqueTemplate.style.display = "block";
    }
  },
  mounted(){
    this.planingTemplate = document.querySelector(".planing");
    this.historiqueTemplate = document.querySelector(".historique");
    this.planing();
  },
  // props:["Accueil"],
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
        <router-link to="/notifications-client"><img :class="{notif: true}" src="/img/Doorbell.png" alt="Notifications"></router-link>
    </header>
    
    <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>

    <div class="col-center">
            <router-link to="/ajout-client" class="col-center none"><button class="big-btn top50">Ajout collecte</button></router-link>
    </div>

    <h3 class="center top50">Date actuelle: 26/05/2026</h3>
    <div class="center top50">
            <button class="switch" @click="planing">Planing</button>
            <button class="switch" @click="historique">Historique</button>
    </div>

    <div class="planing col-center top50">
      <h3 class="center">Planing</h3>
      <div class="center">
      <table>
          <thead>
              <tr>
                  <th>Lieu</th>
                  <th>Date</th>
                  <th>Heure</th>
                  <th>Annuler</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Paris</td>
                  <td>26/05/2026</td>
                  <td>12h00</td>
                  <td><button class="btn">Annuler</button></td>
              </tr>
              <tr>
                  <td>Dinard</td>
                  <td>26/12/2026</td>
                  <td>15h15</td>
                  <td><button class="btn">Annuler</button></td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>

    <div class="historique col-center top50">
      <h3 class="center">Historique</h3>
      <div class="center">
      <table>
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
                  <td>12h00</td>
              </tr>
              <tr>
                  <td>Dinard</td>
                  <td>26/12/2026</td>
                  <td>15h15</td>
              </tr>
          </tbody>
      </table>
    </div>
    </div>

<div class="center">
  <!-- <button class="btn top50">DAC</button>  a recevoir-->
  <button class="btn top50">Consignes de tri</button>
  <button class="btn top50">Bilan annuel</button>
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


</style>