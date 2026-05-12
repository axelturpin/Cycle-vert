<script>
export default{
  data(){
    return {
      receptionTemplate: null,
      valorisationTemplate: null,
      Accueiltemp: "/accueil-valorisateur",
    }
  },
  methods:{
    reception(){
      this.receptionTemplate.style.display = "block";
      this.valorisationTemplate.style.display = "none";
    },
    valorisation(){
      this.receptionTemplate.style.display = "none";
      this.valorisationTemplate.style.display = "block";
    }
  },
  mounted(){
    this.receptionTemplate = document.querySelector(".reception");
    this.valorisationTemplate = document.querySelector(".valorisation");
    this.reception();
  },
  props:["Accueil"],
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
        <router-link to="/notifications-valorisateur"><img :class="{notif: true}" src="/img/Doorbell.png" alt="Notifications"></router-link>
    </header>

    <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>

    <div class="col-center">
            <router-link to="/ajout-andain" class="col-center none"><button class="big-btn top50">Ajout Andain</button></router-link>
    </div>

    <h3 class="center top50">Date actuelle: 26/05/2026</h3>
    <div class="center top50">
            <button class="switch" @click="reception">reception</button>
            <button class="switch" @click="valorisation">Valorisation</button>
    </div>

    <div class="reception col-center top50">
      <h3 class="center">reception</h3>
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

    <div class="valorisation  top50">
      <h3 class="center">valorisation</h3>
      <div class="cartes">
        <table class="col-center">
            <tbody>
                    <tr><th>Lieu: Paris</th></tr>
                    <tr><th><label for="date">Date: </label><input class="date" type="date" id="date"></th></tr>
                    <tr><th><label for="date">Heure: </label><input class="heure" type="time" id="heure"></th></tr>
                    <tr><th>étape: 
                        <select name="" id="">
                            <option value="Higiénisation">Higiénisation</option>
                            <option value="Fermentation">Fermentation</option>
                            <option value="Maturation">Maturation</option>
                        </select>
                        <br>
                    Temps restant: 12 semaines
                    </th></tr>
                    <tr><th><button class="btn">Enregistrer analyses</button></th></tr>
                    <tr><th class="center"><label for="check">Valider NFU: </label><input type="checkbox" v-model="check1" id="check" class="checkbox"></th></tr>
                    <!-- <tr><th><label for="check2">Higiénisation: </label><input type="checkbox" v-model="check2" id="check2"></th></tr> -->
                    <tr><th><label for="température">températue en °C: </label><input class="températue" type="number" id="température"></th></tr>
                    <tr><th><div class="center"><button class="btn">Historique de l'andain</button></div></th></tr>
                    <tr><th>Date relevé à faire: {{ "aujourd'hui" }}</th></tr>

                    <tr><th>compteur 55°C / 7 jours: <br>
                            relevé 1: <label for="date1">Date: </label><input class="date1" type="date" id="date1"> <input type="checkbox" class="checkbox">
                    </th></tr>
                    <tr><th>contrôle 3 relevés / semaine</th></tr>


            </tbody>
        </table>
    </div>
    </div>
      <!-- <table class="col-center top50">
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
      </table> -->
    

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

.cartes *{
    margin: 20px;
}

.bac{
    width: 30px;
}

.checkbox{
  width: 1.2rem;
  height: 1.2rem;
}

</style>