<script>
import NavAdmin from '@/components/NavAdmin.vue';

</script>

<template>
    <NavAdmin></NavAdmin>


    <div class="resumer col-center top50">
        <h3>Stats collecte</h3>
        <p>Poids total collecté: 100kg</p>
        <p>Nnombre de tournées réalisées: 12</p>
        <p>Nombre de points collectés: 20</p>
        <p>Nombre de bacs collectés: 24</p>
    </div>
<div class="historique col-center top50">
    <h3 class="center">Historique</h3>
    <div class="center">
    <table>
        <thead>
            <tr>
                <th>Collecteur</th>
                <th>Client</th>
                <th>Lieu</th>
                <th>Date</th>
                <th>Heure</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Axel</td>
                <td>Axel</td>
                <td>Paris</td>
                <td>26/05/2026</td>
                <td>12h00</td>
            </tr>
            <tr>
                <td>Pikachu</td>
                <td>Pikachu</td>
                <td>Dinard</td>
                <td>26/12/2026</td>
                <td>15h15</td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>

</template>

<style scoped>
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