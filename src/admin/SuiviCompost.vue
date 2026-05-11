<script>
import NavAdmin from '@/components/NavAdmin.vue';
    export default{
        data(){
            return{

            }
        }
    }
</script>

<template>
    <NavAdmin></NavAdmin>

    
    <h2 class="center">Suivi compost</h2>
    <div class="valorisation  top50">
      <h3 class="center">valorisation</h3>
      <div class="cartes">
        <table class="col-center">
            <tbody>
                    <tr><th>Valorisateur: Félix</th></tr>
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
                    <tr><th>échange 1:1 fait le 26/12/1999</th></tr>
                    <tr><th><label for="check">Valider NFU: </label><input type="checkbox" v-model="check1" id="check"></th></tr>
                    <!-- <tr><th><label for="check2">Higiénisation: </label><input type="checkbox" v-model="check2" id="check2"></th></tr> -->
                    <tr><th><label for="température">températue en °C: </label><input class="températue" type="number" id="température"></th></tr>
                    <tr><th><div class="center"><button class="btn">Historique de l'andain</button></div></th></tr>
                    <tr><th>Date relevé à faire: {{ "aujourd'hui" }}</th></tr>

                    <tr><th>compteur 55°C / 7 jours</th></tr>
                    <tr><th>contrôle 3 relevés / semaine</th></tr>


            </tbody>
        </table>
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