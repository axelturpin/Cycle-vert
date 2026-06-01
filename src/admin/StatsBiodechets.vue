<script>
import NavAdmin from '@/components/NavAdmin.vue';

export default{
  data(){
    return {
      tournéesTemplate: null,
      clientsTemplate: null,
      Accueiltemp: '/accueil-client'
    }
  },
  methods:{
    tournées(){
      this.tournéesTemplate.style.display = "block";
      this.clientsTemplate.style.display = "none";
    },
    clients(){
      this.tournéesTemplate.style.display = "none";
      this.clientsTemplate.style.display = "block";
    }
  },
  mounted(){
    this.tournéesTemplate = document.querySelector(".tournées");
    this.clientsTemplate = document.querySelector(".clients");
    this.tournées();
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
    <NavAdmin></NavAdmin>


    <div class="center top50">
            <button class="switch" @click="tournées">tournées</button>
            <button class="switch" @click="clients">Clients</button>
    </div>


    <div class="resumer col-center top50">
        <h3>Stats Biodechets</h3>
        <p>Poids total biodechets annuel: 1000kg</p>
    </div>
<div class="tournées col-center top50">
    <h3 class="center">Biodechets par tournée</h3>
    <div class="center">
    <table>
        <thead>
            <tr>
                <th>Collecteur</th>
                <th>date</th>
                <th>Poids</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Axel</td>
                <td>12/12/1999</td>
                <td>100kg</td>
            </tr>
            <tr>
                <td>Pikachu</td>
                <td>16/00/2012</td>
                <td>50kg</td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>

<div class="clients col-center top50">
    <h3 class="center">Biodechets par clients</h3>
    <div class="center">
    <table>
        <thead>
            <tr>
                <th>Client</th>
                <th>Poids total</th>
                <th>Poids mensuel</th>
                <th>Poids annuel</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Axel</td>
                <td>100kg</td>
                <td>100kg</td>
                <td>100kg</td>
            </tr>
            <tr>
                <td>Pikachu</td>
                <td>50kg</td>
                <td>50kg</td>
                <td>50kg</td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>

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

.resumer{
    margin: 10px;
    font-size: 1.3rem;
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