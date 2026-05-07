<script>
import NavAdmin from '@/components/NavAdmin.vue';

</script>


<template>
    <NavAdmin></NavAdmin>

    <div class="resumer col-center top50">
        <h3>Stats compost</h3>
        <p>Poids compost produit aujourd'hui: 100kg</p>
        <p>Poids compost produit ce mois-ci: 600kg</p>
        <p>Poids compost produit cette année: 6 Tonnes</p>
    </div>

    <div class="historique col-center top50">
    <h3 class="center">Historique</h3>
    <div class="center">
    <table>
        <thead>
            <tr>
                <th>Mois</th>
                <th>Poids de compost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Janvier</td>
                <td>500 kg</td>
            </tr>
            <tr>
                <td>Fevrier</td>
                <td>513 kg</td>
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