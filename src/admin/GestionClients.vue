
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
              <button class="btn" @click="ajout" style="margin-bottom: 40px;">Ajout utilisateur</button>
            </div>
        </div>

        <div class="clients">
            <table>
                <thead>
                    <tr><th>Identifiant: Lorem, ipsum dolor.</th></tr>
                    <tr><th>Mot de passe: Axel</th></tr>
                    <tr><th><div class="col-center">Lieux et autres informations<textarea class="infos">Paris, Dinard</textarea></div></th></tr>
                    <tr><th><button class="btn">Sauvegarder</button></th></tr>
                    <tr><th><div class="col-center">Message a envoyer: <textarea class="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eius rerum ea! Vero odit et vitae voluptatum provident non recusandae temporibus fugit quas eius commodi repellat, molestiae aperiam hic quos.</textarea></div></th></tr>
                    <tr><th><div class="col-center">Photo à envoyé: 
                      <input type="file"
                            name="photo" 
                            accept="image/png, image/jpeg, image/gif, image/webp">
                    </div></th></tr>
                    <tr><th><button class="btn">Envoyer</button></th></tr>
                </thead>
            </table>
        </div>
    </div>


</template>

<style scoped>

.infos{
  width: 40vw;
  height: 80px;
}

.msg{
  width: 50vw;
  height: 100px;
}

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