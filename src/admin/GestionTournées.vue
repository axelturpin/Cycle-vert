<script>
import NavAdmin from '@/components/NavAdmin.vue';
    export default{
        data(){
            return{
                carteAjout: null,
                carteAjoutMobile: null,
                collecteur: null,
                client: null,
                lieu: null,
                date: null,
                heure: null,
                tournées: null,
                modif: false,
                // collecteurInput: null,
                // clientInput: null,
                // lieuInput: null,
                // dateInput: null,
                // heureInput: null,
                // tournéesInput: null,
            }
        },
        methods:{
            carteAjouter(){
                if(this.carteAjout.style.display === "block"){
                    this.carteAjout.style.display = "none";
                    this.carteAjoutMobile.style.display = "none";
                }
                else{
                    this.carteAjout.style.display = "block";
                    this.carteAjoutMobile.style.display = "block";
                }
            },
            ajouter(){
                let storage = JSON.parse(localStorage.getItem("tournées")) || [];
                this.tournées = Array.isArray(storage) ? storage : [];
                let tournée = {collecteur: this.collecteur, client: this.client, lieu: this.lieu, date: this.date, heure: this.heure};
                this.tournées.push(tournée);
                localStorage.setItem("tournées", JSON.stringify(this.tournées));
                this.collecteur = "";
                this.client = "";
                this.lieu = "";
                this.date = "";
                this.heure = "";
            },
            modifier(index){
                
                if(this.modif === true){
                    this.modif = false;
                    document.querySelector(".inputCollecteur").remove();
                    document.querySelector(".inputClient").remove();
                    document.querySelector(".inputLieu").remove();
                    document.querySelector(".inputDate").remove();
                    document.querySelector(".inputHeure").remove();
                    document.querySelector('.btnAjout').remove();
                }
                else{
                    this.modif = true;
                    let modifCollecteur = document.querySelector(`.collecteur${index}`);
                    let modifClient = document.querySelector(`.client${index}`);
                    let modifLieu = document.querySelector(`.lieu${index}`);
                    let modifDate = document.querySelector(`.date${index}`);
                    let modifHeure = document.querySelector(`.heure${index}`);
                    let modifbtn = document.querySelector(`.modif${index}`);

                    const inputCollecteur = document.createElement("input");
                    const inputClient = document.createElement("input");
                    const inputLieu = document.createElement("input");
                    const inputDate = document.createElement("input");
                    const inputHeure = document.createElement("input");
                    inputDate.type = "date";
                    inputHeure.type = "time";
                    const ajout = document.createElement('button');
                    ajout.className = "btn";
                    ajout.textContent = "Enregistrer";

                    inputCollecteur.className = "inputCollecteur";
                    inputClient.className = "inputClient";
                    inputLieu.className = "inputLieu";
                    inputDate.className = "inputDate";
                    inputHeure.className = "inputHeure";
                    ajout.className = "btn btnAjout"

                    modifCollecteur.append(inputCollecteur);
                    modifClient.append(inputClient);
                    modifLieu.append(inputLieu);
                    modifDate.append(inputDate);
                    modifHeure.append(inputHeure); 
                    modifbtn.append(ajout);

                    for(let i = 0; i <= this.tournées.length; i++){
                        const tournée = this.tournées[i];
                        if(i === index){
                            inputCollecteur.value =  tournée.collecteur;
                            inputClient.value = tournée.client;
                            inputLieu.value = tournée.lieu;
                            inputDate.value = tournée.date;
                            inputHeure.value = tournée.heure;
                        }
                    }

                    ajout.addEventListener("click",()=>{
                        this.tournées = this.tournées.map((tournée, i)=>{
                            if(i === index){
                                tournée.collecteur = inputCollecteur.value;
                                tournée.client = inputClient.value;
                                tournée.lieu = inputLieu.value;
                                tournée.date = inputDate.value;
                                tournée.heure = inputHeure.value;
                            }
                            return(tournée);
                        })
                        localStorage.setItem("tournées", JSON.stringify(this.tournées));

                        this.modif = false;
                        document.querySelector(".inputCollecteur").remove();
                        document.querySelector(".inputClient").remove();
                        document.querySelector(".inputLieu").remove();
                        document.querySelector(".inputDate").remove();
                        document.querySelector(".inputHeure").remove();
                        document.querySelector('.btnAjout').remove();
                    })
                }
            },
            supprimer(index){
                if(confirm("Voulez-vous supprimer cette collecte ?")){
                    let storage = JSON.parse(localStorage.getItem("tournées")) || [];
                    this.tournées = Array.isArray(storage) ? storage : [];
                    console.log(storage);
                    this.tournées = this.tournées.filter((e, key) => {
                        return (key !== index)
                    });
                    console.log(this.tournées);
                    localStorage.setItem("tournées", JSON.stringify(this.tournées));
                }
            }
        },
        computed(){
            this.tournées;
        },
        mounted(){
            let storage = JSON.parse(localStorage.getItem("tournées")) || [];
            this.tournées = Array.isArray(storage) ? storage : [];
            this.carteAjout = document.querySelector(".ajout");
            this.carteAjout.style.display = "none";
            this.carteAjoutMobile = document.querySelector(".ajout-mobile");
            this.carteAjoutMobile.style.display = "none";
            const screenWidth = window.innerWidth;
            if(screenWidth <= 768){
                document.querySelector(".mobile").style.display = "block";
                document.querySelector(".desktop").style.display = "none";
            }
            else{
                document.querySelector(".mobile").style.display = "none";
                document.querySelector(".desktop").style.display = "block";
            }
        }
    }
</script>

<template>
    <NavAdmin></NavAdmin>

    <div class="center">
        <h3>Gestion tournées</h3>
    </div>

    <div class="center">
        <button class="big-btn" @click="carteAjouter">Ajout tournée</button>
    </div>

<div class="desktop">
    <div class="cartes ajout col-center">
        <div class="center">
        <table>
            <thead>
                <tr>
                    <th>Collecteur: </th>
                    <th>Client: </th>
                    <th>Lieu: </th>
                    <th>Date: </th>
                    <th>Heure: </th>
                    <th>Ajouter: </th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td><input type="text" placeholder="Collecteur" v-model="collecteur"></td>
                        <td><input type="text" placeholder="Client" v-model="client"></td>
                        <td><input type="text" placeholder="Paris" v-model="lieu"></td>
                        <td><input type="Date" v-model="date"></td>
                        <td><input type="time" v-model="heure"></td>
                        <td><button class="btn" @click="ajouter">Ajouter</button></td>
                    </tr>
            </tbody>
        </table>
        </div>
    </div>

    <div class="cartes col-center">
        <div class="center">
        <table class="">
            <thead>
                <tr>
                    <th>Collecteur: </th>
                    <th>Client: </th>
                    <th>Lieu: </th>
                    <th>Date: </th>
                    <th>Heure: </th>
                    <th>Modifier: </th>
                    <th>Supprimer: </th>
                </tr>
            </thead>
            <tbody>
                    <tr v-for="(tournée, index) in tournées" :key="index">
                        <td :class="'collecteur'+index"><div class="col-center">{{ tournée.collecteur }}</div></td>
                        <td :class="'client'+index"><div class="col-center">{{ tournée.client }}</div></td>
                        <td :class="'lieu'+index"><div class="col-center">{{ tournée.lieu }}</div></td>
                        <td :class="'date'+index"><div class="col-center">{{ tournée.date }}</div></td>
                        <td :class="'heure'+index"><div class="col-center">{{ tournée.heure }}</div></td>
                        <td>
                            <div :class="'col-center modif'+index">
                            <button class="btn" @click="modifier(index)">Modifier</button>
                            </div>
                        </td>
                        <td><button class="btn" @click="supprimer(index)">Supprimer</button></td>
                    </tr>
            </tbody>
        </table>
        </div>
    </div>
</div>

<div class="mobile">
    <div class="cartes ajout-mobile">
        <table class="col-center">
            <tbody>
                    <tr><th>Collecteur: <input type="text" placeholder="Collecteur"></th></tr>
                    <tr><th>Client: <input type="text" placeholder="Client"></th></tr>
                    <tr><th>Lieu: <input type="text" placeholder="Paris"></th></tr>
                    <tr><th>Date: <input type="Date"></th></tr>
                    <tr><th>Heure: <input type="time"></th></tr>
                    <tr><th><button class="btn">Ajouter</button></th></tr>
            </tbody>
        </table>
    </div>
    <div class="cartes">
        <table class="col-center">
            <tbody>
                    <tr><th>Collecteur: Axel</th></tr>
                    <tr><th>Client: Axel</th></tr>
                    <tr><th>Lieu: Paris</th></tr>
                    <tr><th>Date: 26/12/2026</th></tr>
                    <tr><th>Heure: 16h</th></tr>
                    <tr><th><button class="btn">Modifier</button></th></tr>
                    <tr><th><button class="btn">Supprimer</button></th></tr>
            </tbody>
        </table>
        <table class="col-center">
            <tbody>
                    <tr><th>Collecteur: X</th></tr>
                    <tr><th>Client: Pikachu</th></tr>
                    <tr><th>Lieu: Dinard</th></tr>
                    <tr><th>Date: 26/12/2026</th></tr>
                    <tr><th>Heure: 16h</th></tr>
                    <tr><th><button class="btn">Modifier</button></th></tr>
                    <tr><th><button class="btn">Supprimer</button></th></tr>
            </tbody>
        </table>
    </div>
</div>

</template>

<style scoped>
.cartes *{
    margin: 20px;
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