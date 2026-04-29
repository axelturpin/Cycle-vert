<script>
export default{
  data(){
    return {
      planingTemplate: null,
      itinéraireTemplate: null,
      toogle: false,
      Accueiltemp: "/accueil-collecteur"
    }
  },
  methods:{
    planing(){
      this.planingTemplate.style.display = "block";
      this.itinéraireTemplate.style.display = "none";
    },
    itinéraire(){
      this.planingTemplate.style.display = "none";
      this.itinéraireTemplate.style.display = "block";
    },
    switch(){
        this.toogle = !this.toogle;
        const menu = document.querySelector(".menu-collecteur");
        console.log(this.toogle);
        console.log(menu);
        if(this.toogle){
            menu.style.display = "block";
        }else{
            menu.style.display = "none";
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
    <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>

    <div class="col-center">
    <button class="center top50 big-btn" @click="switch">Menu</button>
    </div>

    <div class="center top50 menu-collecteur">
        <div>collectes</div>
        <div>Itinéraire</div>
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


</style>