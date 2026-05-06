<script>
import NavAdmin from '@/components/NavAdmin.vue';
    export default{
        data(){
            return{
                carteAjout: null,
                carteAjoutMobile: null,
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
            }
        },
        mounted(){
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
                        <td><input type="text" placeholder="Collecteur"></td>
                        <td><input type="text" placeholder="Client"></td>
                        <td><input type="text" placeholder="Paris"></td>
                        <td><input type="Date"></td>
                        <td><input type="time"></td>
                        <td><button class="btn">Ajouter</button></td>
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
                    <tr>
                        <td>quelqu'un</td>
                        <td>quelqu'un</td>
                        <td>Paris</td>
                        <td>Date</td>
                        <td>time</td>
                        <td><button class="btn">Modifier</button></td>
                        <td><button class="btn">Supprimer</button></td>
                    </tr>
                    <tr>
                        <td>Moi</td>
                        <td>Client</td>
                        <td>Paris</td>
                        <td>Date</td>
                        <td>12h</td>
                        <td><button class="btn">Modifier</button></td>
                        <td><button class="btn">Supprimer</button></td>
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