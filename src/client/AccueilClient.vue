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
        <router-link to="/notifications-client"><img src="/img/Doorbell.png" alt="Notifications"></router-link>
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

    <div class="historique">
      <h3 class="center top50">Historique</h3>
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