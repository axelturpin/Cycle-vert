<script>
export default{
  data(){
    return {
        planingTemplate: null,
        itinéraireTemplate: null,
        informerTemplate: null,
        Accueiltemp: "/accueil-collecteur",
        collectes: [],
        historiqueCollecteur: [],
        restant: 0,
        fait: 0,
        // nom: [],
        bac: [], 
        echange: [], 
        temperature: [], 
        poids: [],
        collecteur: "collecteur inconnu",
    //   check1: false,
    //   check2: false,
    }
  },
  methods:{
    planing(){
        this.planingTemplate.style.display = "block";
        this.itinéraireTemplate.style.display = "none";
        this.informerTemplate.style.display = "none";
        const menu = document.querySelector(".menu-collecteur");
        menu.style.display = "none";
    },
    itinéraire(){
        this.planingTemplate.style.display = "none";
        this.itinéraireTemplate.style.display = "block";
        this.informerTemplate.style.display = "none";
        const menu = document.querySelector(".menu-collecteur");
        menu.style.display = "none";
    },
    informer(){
        this.planingTemplate.style.display = "none";
        this.itinéraireTemplate.style.display = "none";
        this.informerTemplate.style.display = "block";
        const menu = document.querySelector(".menu-collecteur");
        menu.style.display = "none";
    },
    switch2(){
        const menu = document.querySelector(".menu-collecteur");
        if(menu.style.display == "block"){
            menu.style.display = "none";
        }else{
            menu.style.display = "block";
        }
    },
    // tournée(){
    //     this.restant = 0;
    //     this.fait = 0;
    //     if(this.check1){
    //         this.fait++;
    //     }else{
    //         this.restant++;
    //     }
    //     if(this.check2){
    //         this.fait++;
    //     }else{
    //         this.restant++;
    //     }
    //     console.log(this.fait);
    // },
    valider(index, lieu, date, heure){
        if(confirm("Voulez-vous masquer cette collecte pour vous ?")){
            let storage = JSON.parse(localStorage.getItem("historique-collecteur")) || [];
            this.historiqueCollecteur = Array.isArray(storage) ? storage : [];
            let collecte = {
                collecteur: this.collecteur,
                lieu: lieu, 
                date: date, 
                heure: heure, 
                Andain: this.nom[index],
                bac: this.bac[index], 
                echange: this.echange[index], 
                temperature: this.temperature[index], 
                poids: this.poids[index],
            };
            this.historiqueCollecteur.push(collecte);
            localStorage.setItem("historique-collecteur", JSON.stringify(this.historiqueCollecteur));
            console.log(localStorage.getItem("historique-collecteur"));

            this.fait++;
            this.restant--;
            storage = JSON.parse(localStorage.getItem("Collectes-restantes")) || [];
            this.collectes = Array.isArray(storage) ? storage : [];
            this.collectes = this.collectes.filter((e, key) => {
                return (key !== index)
            });
            localStorage.setItem("Collectes-restantes", JSON.stringify(this.collectes));
        }
    },
    toLocaleDateString(date) {
        const tempDate = new Date(date);
        if(Number.isNaN(tempDate.getTime())){
            return ("date NaN")
        }
            return tempDate.toLocaleDateString('fr-FR');
    },
  },
  mounted(){
    this.planingTemplate = document.querySelector(".planing");
    this.itinéraireTemplate = document.querySelector(".itinéraire");
    this.informerTemplate = document.querySelector(".informer");
    this.planing();
    this.restant = JSON.parse(localStorage.getItem("Collectes-restantes")).length;
    this.fait = JSON.parse(localStorage.getItem("Collectes")).length - this.restant;
    
    // Lignes a retirer en prod
    localStorage.setItem("Collectes-restantes", localStorage.getItem("Collectes"));
    localStorage.setItem("historique-collecteur", localStorage.getItem("Collectes"));

    const storage = JSON.parse(localStorage.getItem("Collectes-restantes")) || [];
    this.collectes = Array.isArray(storage) ? storage : [];
  },
  // props:["Accueil"]
      provide() {
      return {
        Accueiltemp: this.Accueiltemp
      }
    },
    computed(){
        this.restant;
        this.fait;
    }
}
</script>

<template>
    <header>
        <router-link :to="this.Accueiltemp || this.Accueil"><img src="/img/Home Page.png" alt="Accueil"></router-link>
        <h1 class="col-center">Cycle vert</h1>
        <router-link to="/notifications-client"><img :class="{notif: true}" src="/img/Doorbell.png" alt="Notifications"></router-link>
    </header>

    <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>

    
    <div class="col-center">
        <button class="center top50 big-btn" @click="switch2">Menu</button>
    </div>
    
    <p class="center top50">Nombre de points collectés: {{ fait }}</p>
    <p class="center top50">Nombre de points non collectés: {{ restant }}</p>

    <div class="center top50 menu-collecteur">
        <div @click="planing" class="center">collectes</div>
        <div @click="itinéraire" class="center">Itinéraire</div>
        <!-- <div class="center">Suivi anomalies</div> -->
        <div @click="informer" class="center">Informer</div>
    </div>

    <div class="planing top50">
      <h3 class="center">Collectes</h3>
      <div class="cartes">
    <div v-for="(collecte, index) in collectes" :key="index">
        <table class="col-center">
            <tbody>
                    <!-- <tr><th><label for="nom">Andain</label> <input type="text" v-model="nom[index]"></th></tr> -->
                    <tr><th>Lieu: {{ collecte.lieu }}</th></tr>
                    <tr><th>Date: {{ toLocaleDateString(collecte.date) }}</th></tr>
                    <tr><th>Heure: {{ collecte.heure }}</th></tr>
                    <tr><th><label for="bacs">nb bac: <input class="bac" type="number" id="bacs" v-model="bac[index]"></label></th></tr>
                    <tr><th><div class="center"><label for="échange1:1">échange1:1 </label><input type="checkbox" id="échange1:1" class="checkbox" v-model="echange[index]"></div></th></tr>
                    <tr><th><label for="température">températue: <input class="bac" type="number" id="température" v-model="temperature[index]"></label></th></tr>
                    <tr><th><label for="poids">poids en kg: </label><input class="poids" type="number" id="poids" v-model="poids[index]"></th></tr>
                    <tr><th><div class="center"><button class="btn" @click="informer">Anomalie</button></div></th></tr>
                    <tr><th><div class="center"><button @click="valider(index, collecte.lieu, toLocaleDateString(collecte.date), collecte.heure)" class="btn">Valider</button></div></th></tr>
            </tbody>
        </table>  
    </div>

        <div class="col-center">
            <button class="btn">Cloturer tournée</button>
        </div>
      </div>
      </div>

      <div class="col-center informer top50">
        <h2 class="col-center gap">Informer</h2> 
            <div class="col-center">
                <table><tbody>
                    <tr><th><div class="col-center">Lieu: <input type="text"></div></th></tr>
                <tr><th><div class="col-center">Message a envoyer: <textarea class="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eius rerum ea! Vero odit et vitae voluptatum provident non recusandae temporibus fugit quas eius commodi repellat, molestiae aperiam hic quos.</textarea></div></th></tr>
                <tr><th><div class="col-center">Photo à envoyé: 
                    <input type="file"
                    name="photo" 
                    accept="image/png, image/jpeg, image/gif, image/webp">
                </div></th></tr>
                <tr><th><button class="btn">Envoyer</button></th></tr>
                </tbody></table>
            </div>
        </div>

    <div class="itinéraire top50">
      <h3 class="center">itinéraire</h3>
    </div>

</template>

<style scoped>
.switch{
    background-color: #A3B18A;
    border: 1px solid black;
    width: 180px;
    height: 36px;
}

.switch:focus{
    opacity: 0.64;
}

.menu-collecteur{
    display: none;
    position: absolute;
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

    .menu-collecteur{
        background-color: #A3B18A;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        top: calc(92px + 186px);
        left: 50vw;
        border-radius: 0px 0px 20px 20px;
        z-index: 2;
    }

    .menu-collecteur *{
        width: 100px;
        height: 48px;
        border: 1px solid black;
    }

    .menu-collecteur *:last-child{
        border-radius: 0px 0px 20px 20px;
    }

    /* .textCenter{
        
        display: flex;
        justify-content: center;
        align-items: center;
    } */

    .cartes *{
        margin: 20px;
    }
    
.bac{
    width: 30px;
}

.informer{
    min-width: 50vw;
    min-height: 240px;
    background-color: #F3E5AB;
    font-size: 1.2rem;
}

textarea{
    min-width: 30vw;
    min-height: 120px;
}

.checkbox{
  width: 1.2rem;
  height: 1.2rem;
}


</style>