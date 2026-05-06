
<script>
import NavAdmin from '@/components/NavAdmin.vue';

export default{
  data(){
    return {
      divAjout: null,
    }
  },
  methods:{
    ajoutClient(){
      if(this.divAjout.style.display === "block"){
        this.divAjout.style.display = "none"
      }
      else{
        this.divAjout.style.display = "block";
      }
    }
  },
  mounted(){
    this.divAjout = document.querySelector(".ajout-client");
    this.divAjout.style.display = "none";
  }
}
</script>

<template>
    <NavAdmin></NavAdmin>

   <h2 class="top50 center">Notifications</h2> 
    <div class="col-center dashboard top50">
        <button class="btn" @click="ajoutClient">Afficher Ajout utilisateur</button>

        <div class="ajout-client">
          <table>
                <thead>
                    <tr><th>Identifiant: <input type="text"></th></tr>
                    <tr><th>Mot de passe: <input type="text"></th></tr>
                    <tr><th><div class="col-center">Lieux et autres informations<textarea name="" id=""></textarea></div></th></tr>
                </thead>
            </table>
            <div class="center">
              <button class="btn" @click="ajout">Ajout utilisateur</button>
            </div>
        </div>

        <div class="clients">
            <table>
                <thead>
                    <tr><th>Identifiant: Lorem, ipsum dolor.</th></tr>
                    <tr><th>Mot de passe: Axel</th></tr>
                    <tr><th><div class="col-center">Lieux et autres informations<textarea name="" id="">Paris, Dinard</textarea></div></th></tr>
                </thead>
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