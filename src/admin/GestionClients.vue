
<script>
import NavAdmin from '@/components/NavAdmin.vue';

export default{
  data(){
    return {

    }
  }
}
</script>

<template>
    <NavAdmin></NavAdmin>

   <h2 class="top50 center">Notifications</h2> 
    <div class="col-center dashboard top50">
        <button class="btn">Ajouter utilisateur</button>
        <div class="clients">
            <table>
                <thead>
                    <tr>
                        <th>Identifiant</th>
                        <th>Mot de passe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lorem, ipsum dolor.</td>
                        <td>Axel</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


</template>

<style scoped>
    .notification{
        background-color: #F3E5AB;
        width: 180px;
        height: auto;
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