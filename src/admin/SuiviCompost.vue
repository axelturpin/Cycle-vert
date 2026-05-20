<script>
import NavAdmin from '@/components/NavAdmin.vue';
    export default{
        data(){
            return{
                collectes: [],
                collecteur: [],
                lieu: [],
                date: [],
                heure: [],
                bac: [], 
                echange: [], 
                temperature: [], 
                poids: [],
                valorisations: [],
            }
        },
        methods:{
            toLocaleDateString(date) {
            const tempDate = new Date(date);
            if(Number.isNaN(tempDate.getTime())){
                return ("date NaN")
            }
                return tempDate.toLocaleDateString('fr-FR');
            },
            enregistrer(index){
                // let inputCollecteur = document.querySelector(`.collecteur${index}`);
                // let inputLieu = document.querySelector(`.lieu${index}`);
                // let inputDate = document.querySelector(`.date${index}`);
                // let inputHeure = document.querySelector(`.heure${index}`);
                // let inputBac = document.querySelector(`.bac${index}`);
                // let inputEchange = document.querySelector(`.echange${index}`);
                // let inputTemperature = document.querySelector(`.temperature${index}`);
                // let inputPoids = document.querySelector(`.poids${index}`);

                this.collectes = this.collectes.map((collecte, i)=>{
                    collecte.collecteur = this.collecteur[index];
                    collecte.lieu = this.lieu[index];
                    collecte.date = this.date[index];
                    collecte.heure = this.heure[index];
                    collecte.bac = this.toLocaleDateString(this.bac[index]);
                    collecte.echange = this.echange[index];
                    collecte.temperature = this.temperature[index];
                    collecte.poids = this.poids[index];
                    return(collecte);
                })
                localStorage.setItem("historique-collecteur", JSON.stringify(this.collectes));
                console.log(this.collectes);
            },
        },
        mounted(){
            let storage = JSON.parse(localStorage.getItem("historique-collecteur")) || [];
            this.collectes = Array.isArray(storage) ? storage : [];
            this.valorisations = JSON.parse(localStorage.getItem("valorisation"));
            // console.log(this.valorisations);
            console.log(this.collectes);
        },
        computed(){
            this.collectes;
        }
    }
</script>

<template>
    <NavAdmin></NavAdmin>

    
    <h2 class="center">Suivi compost</h2>
    <div class="valorisation  top50">
      <h3 class="center">valorisation</h3>
      <div class="cartes" >
        <table class="col-center" v-for="(val, index) in valorisations" :key="index">
            <tbody>
                    <tr><th>Andain: {{ val.andain }}</th></tr>
                    <tr><th>Lieu: {{ val.lieu }}</th></tr>
                    <tr><th>Date: {{ val.date }}</th></tr>
                    <tr><th>Heure {{ val.heure }}</th></tr>
                    <tr><th>étape: 
                        {{ val.etape }}
                    </th></tr>
                    <tr><th>NFU: <p v-if="val.NFU">Valider</p></th></tr>
                    <!-- <tr><th><label for="check2">Higiénisation: </label><input type="checkbox" v-model="check2" id="check2"></th></tr> -->
                    <tr><th>températue en °C: {{ val.temperature }}</th></tr>
                    <tr><th>Date relevé à faire: {{ "aujourd'hui" }}</th></tr>
                    
                    <tr><th>compteur 55°C / 7 jours: <br>
                      <div class="center">relevé 1: Date: {{ val.daterelevé1 }} {{ val.checkRelevé1 }}</div>
                      <div class="center">relevé 2: Date: {{ val.daterelevé2 }} {{ val.checkRelevé3 }}</div>
                      <div class="center">relevé 3: Date: {{ val.daterelevé3 }} {{ val.checkRelevé3 }}</div>
                    </th></tr>
                    <tr><th>contrôle 3 relevés / semaine</th></tr>
                    <!-- <tr><th><button class="btn" @click="enregistrer">Enregistrer analyses</button></th></tr> -->
                    <tr><th><div class="center"><button class="btn">Historique de l'andain</button></div></th></tr>

            </tbody>
        </table>
    <div class="historique-collecteur">
        <h3 class="center">historique collecteur</h3>
      <div class="cartes">
        <table class="col-center" v-for="(collecte, index) in collectes" :key="index">
            <tbody>
                    <tr><th>Collecteur: {{ collecte.collecteur? collecte.collecteur : "inconnu" }}</th></tr>
                    <tr><th>Lieu: {{ collecte.lieu }}</th></tr>
                    <tr><th>Date: {{ toLocaleDateString(collecte.date) }}</th></tr>
                    <tr><th>Heure: {{ collecte.heure }}</th></tr>
                    <tr><th>nb bac: {{ collecte.bac }}</th></tr>
                    <tr><th><div class="center">échange1:1 {{ collecte.echange }}</div></th></tr>
                    <tr><th>températue: {{ collecte.temperature }}</th></tr>
                    <tr><th>poids en kg: {{ collecte.poids }}</th></tr>
                    <tr><th>Modifier:</th></tr>
                    <tr><th><label for="collecteur">Collecteur: <input class="collecteur" type="text" id="collecteur" v-model="collecteur[index]"></label></th></tr>
                    <tr><th><label for="lieu">Lieu: <input class="lieu" type="texte" id="lieu" v-model="lieu[index]"></label></th></tr>
                    <tr><th><label for="date">Date: <input class="date" type="date" id="date" v-model="date[index]"></label></th></tr>
                    <tr><th><label for="heure">Heure: <input class="heure" type="time" id="heurebacs" v-model="heure[index]"></label></th></tr>
                    <tr><th><label for="bacs">nb bac: <input class="bac" type="number" id="bacs" v-model="bac[index]"></label></th></tr>
                    <tr><th><div class="center"><label for="échange1:1">échange1:1 </label><input type="checkbox" id="échange1:1" class="checkbox" v-model="echange[index]"></div></th></tr>
                    <tr><th><label for="température">températue: <input class="bac" type="number" id="température" v-model="temperature[index]"></label></th></tr>
                    <tr><th><label for="poids">poids en kg: </label><input class="poids" type="number" id="poids" v-model="poids[index]"></th></tr>
                    <tr><th><button class="btn" @click="enregistrer(index)">Enregistrer</button></th></tr>
            </tbody>
        </table>  
      </div>
    </div>

        <div class="historique-valorisateur"></div>
    </div>
    </div>

</template>

<style scoped>
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
</style>