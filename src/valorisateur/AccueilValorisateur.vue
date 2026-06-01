<script>
export default{
  data(){
    return {
      receptionTemplate: null,
      valorisationTemplate: null,
      Accueiltemp: "/accueil-valorisateur",
      receptions: null,
      valorisations: null,
      val: null,
      nom: null,
      lieu: null,
      date: null,
      heure: null,
      etape: null,
      checkNFU: null,
      temperature: null,
      date1: null,
      date2: null,
      date3: null,
      check1: null,
      check2: null,
      check3: null,
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
    },
    toLocaleDateString(date) {
      const tempDate = new Date(date);
      if(Number.isNaN(tempDate.getTime())){
        return ("pas une date")
      }
        return tempDate.toLocaleDateString('fr-FR');
    },
    enregistrer(){
      let storage = JSON.parse(localStorage.getItem("valorisation")) || [];
      this.valorisations = Array.isArray(storage) ? storage : [];
      this.val = {
        andain: this.nom,
        lieu: this.lieu,
        date: this.date,
        heure: this.heure,
        etape: this.etape,
        NFU: this.checkNFU,
        temperature: this.temperature,
        dateRelevé1: this.date1,
        dateRelevé2: this.date2,
        dateRelevé3: this.date3,
        checkRelevé1: this.check1,
        checkRelevé2: this.check2,
        checkRelevé3: this.check3,
      };
      this.valorisations.push(this.val);
      localStorage.setItem("valorisation", JSON.stringify(this.valorisations));
      this.nom = null;
      this.lieu = null;
      this.date = null;
      this.heure = null;
      this.etape = null;
      this.checkNFU = null;
      this.temperature = null;
      this.date1 = null;
      this.date2 = null;
      this.date3 = null;
      this.check1 = null;
      this.check2 = null;
      this.check3 = null;
    }
  },
  mounted(){
    this.receptionTemplate = document.querySelector(".reception");
    this.valorisationTemplate = document.querySelector(".valorisation");
    this.reception();

    const storage = JSON.parse(localStorage.getItem("receptions")) || [];
    this.receptions = Array.isArray(storage) ? storage : [];
    console.log(this.receptions);
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
              <tr v-for="(reception, index) in receptions" :key="index">
                  <td>{{ reception.lieu }}</td>
                  <td>{{ toLocaleDateString(reception.date) }}</td>
                  <td>{{ reception.heure }}</td>
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
                    <tr><th><label for="nom">Andain: </label><input class="nom" type="text" id="nom" v-model="nom"></th></tr>
                    <tr><th><label for="lieu">Lieu: </label><input class="lieu" type="text" id="lieu" v-model="lieu"></th></tr>
                    <tr><th><label for="date">Date: </label><input class="date" type="date" id="date" v-model="date"></th></tr>
                    <tr><th><label for="heure">Heure: </label><input class="heure" type="time" id="heure" v-model="heure"></th></tr>
                    <tr><th>étape: 
                        <select name="" id="" v-model="etape">
                            <option value="Higiénisation">Higiénisation</option>
                            <option value="Fermentation">Fermentation</option>
                            <option value="Maturation">Maturation</option>
                        </select>
                        <br>
                    Temps restant: 12 semaines
                    </th></tr>
                    <tr><th><div class="center"><label for="check">Valider NFU: </label><input type="checkbox" v-model="checkNFU" id="check" class="checkbox"></div></th></tr>
                    <!-- <tr><th><label for="check2">Higiénisation: </label><input type="checkbox" v-model="check2" id="check2"></th></tr> -->
                    <tr><th><label for="température">températue en °C: </label><input class="températue" type="number" id="température" v-model="temperature"></th></tr>
                    <tr><th>Date relevé à faire: {{ "aujourd'hui" }}</th></tr>
                    
                    <tr><th>compteur 55°C / 7 jours: <br>
                      <div class="center">relevé 1: <label for="date1">Date: </label><input class="date" type="date" id="date1" v-model="date1"> <input type="checkbox" class="checkbox" v-model="check1"></div>
                      <div class="center">relevé 2: <label for="date2">Date: </label><input class="date" type="date" id="date2" v-model="date2"> <input type="checkbox" class="checkbox" v-model="check2"></div>
                      <div class="center">relevé 3: <label for="date3">Date: </label><input class="date" type="date" id="date3" v-model="date3"> <input type="checkbox" class="checkbox" v-model="check3"></div>
                    </th></tr>
                    <tr><th>contrôle 3 relevés / semaine</th></tr>
                    <tr><th><button class="btn" @click="enregistrer">Enregistrer analyses</button></th></tr>
                    <tr><th><div class="center"><button class="btn">Historique de l'andain</button></div></th></tr>


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
    background-color: #64804E;
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