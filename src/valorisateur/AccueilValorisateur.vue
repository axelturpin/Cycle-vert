<script>
export default{
  data(){
    return {
      planingTemplate: null,
      valorisationTemplate: null,
    }
  },
  methods:{
    planing(){
      this.planingTemplate.style.display = "block";
      this.valorisationTemplate.style.display = "none";
    },
    valorisation(){
      this.planingTemplate.style.display = "none";
      this.valorisationTemplate.style.display = "block";
    }
  },
  mounted(){
    this.planingTemplate = document.querySelector(".planing");
    this.valorisationTemplate = document.querySelector(".valorisation");
    this.planing();
  },
  props:["Accueil"]
}
</script>

<template>
    <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>

    <div class="col-center">
            <router-link to="/ajout-andain" class="col-center none"><button class="big-btn top50">Ajout Andain</button></router-link>
    </div>

    <h3 class="center top50">Date actuelle: 26/05/2026</h3>
    <div class="center top50">
            <button class="switch" @click="planing">Planing</button>
            <button class="switch" @click="valorisation">Valorisation</button>
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

    <div class="valorisation">
      <h3 class="center top50">valorisation</h3>
      <table class="col-center top50">
          <thead>
              <tr>
                  <th>Lieu</th>
                  <th>Andain n°</th>
                  <th>Etape</th>
                  <th>temps restant</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Paris</td>
                  <td>1</td>
                  <td>Higiénisation</td>
                  <td>12 semaines</td>
              </tr>
              <tr>
                  <td>Dinard</td>
                  <td>2</td>
                  <td>Fermentation</td>
                  <td>4 semaines</td>
              </tr>
              <tr>
                  <td>Dinard</td>
                  <td>3</td>
                  <td>Maturation</td>
                  <td>12 semaines</td>
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