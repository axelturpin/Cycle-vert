<script>
export default{
  data(){
    return {
      planingTemplate: null,
      itinéraireTemplate: null,
      Accueiltemp: "/accueil-collecteur",
      restant: 0,
      fait: 0,
      check1: false,
      check2: false,
    }
  },
  methods:{
    planing(){
        this.planingTemplate.style.display = "block";
        this.itinéraireTemplate.style.display = "none";
        const menu = document.querySelector(".menu-collecteur");
        menu.style.display = "none";
    },
    itinéraire(){
        this.planingTemplate.style.display = "none";
        this.itinéraireTemplate.style.display = "block";
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
    tournée(){
        this.restant = 0;
        this.fait = 0;
        if(this.check1){
            this.fait++;
        }else{
            this.restant++;
        }
        if(this.check2){
            this.fait++;
        }else{
            this.restant++;
        }
    }
  },
  mounted(){
    this.planingTemplate = document.querySelector(".planing");
    this.itinéraireTemplate = document.querySelector(".itinéraire");
    this.planing();
    this.tournée();
  },
  // props:["Accueil"]
      provide() {
      return {
        Accueiltemp: this.Accueiltemp
      }
    },
    computed(){

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
    
    <p class="center top50">Nombre de points collectés: {{ restant }}</p>
    <p class="center top50">Nombre de points non collectés: {{ fait }}</p>

    <div class="center top50 menu-collecteur">
        <div @click="planing" class="center">collectes</div>
        <div @click="itinéraire" class="center">Itinéraire</div>
        <div class="center">Suivi anomalies</div>
        <div class="center">Informer</div>
    </div>

    <div class="planing top50">
      <h3 class="center">Collectes</h3>
      <div class="cartes">
        <table class="col-center">
            <tbody>
                    <tr><th>Lieu: Paris</th></tr>
                    <tr><th>Date: 12/12/1212</th></tr>
                    <tr><th>Heure: 13h03</th></tr>
                    <tr><th><label for="bacs">nb bac: <input class="bac" type="number" id="bacs"></label></th></tr>
                    <tr><th><label for="échange1:1">échange1:1 <input type="checkbox" id="échange1:1"></label></th></tr>
                    <tr><th><label for="température">températue: <input class="bac" type="number" id="température"></label></th></tr>
                    <tr><th><label for="poids">poids en kg: </label><input class="poids" type="number" id="poids"></th></tr>
                    <tr><th><div class="center"><button class="btn">Anomalie</button></div></th></tr>
                    <tr><th><label for="check">Valider: <input type="checkbox" v-model="check1" id="check"></label></th></tr>
            </tbody>
        </table>
        <table class="col-center">
            <tbody>
                    <tr><th>Lieu: Paris</th></tr>
                    <tr><th>Date: 12/12/1212</th></tr>
                    <tr><th>Heure: 13h03</th></tr>
                    <tr><th><label for="bacs">nb bac: <input class="bac" type="number" id="bacs"></label></th></tr>
                    <tr><th><label for="échange1:1">échange1:1 <input type="checkbox" id="échange1:1"></label></th></tr>
                    <tr><th><label for="température">températue: <input class="bac" type="number" id="température"></label></th></tr>
                    <tr><th><label for="poids">poids en kg: </label><input class="poids" type="number" id="poids"></th></tr>
                    <tr><th><div class="center"><button class="btn">Anomalie</button></div></th></tr>
                    <tr><th><label for="check">Valider: <input type="checkbox" v-model="check1" id="check"></label></th></tr>
            </tbody>
        </table>

        <div class="center">Nombre de points collectés: 1</div>
        <div class="center">Nombre de points non collectés: 1</div>
        <div class="col-center">
            <button class="btn">Cloturer tournée</button>
        </div>
      </div>
      <!-- <table class="col-center top50">
          <thead>
              <tr>
                  <th>Lieu</th>
                  <th>Date</th>
                  <th>Heure</th>
                  <th>Valider</th>
                  <th>nb bac</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Paris</td>
                  <td>26/05/2026</td>
                  <td>12h01</td>
                  <td><input type="checkbox" v-model="check1" @change="tournée"></td>
                  <td><input class="bac" type="number"></td>
              </tr>
              <tr>
                  <td>Dinard</td>
                  <td>26/12/2026</td>
                  <td>15h15</td>
                  <td><input type="checkbox" v-model="check2" @change="tournée"></td>
                  <td><input class="bac" type="number"></td>
              </tr>
          </tbody>
      </table> -->
    </div>

    <div class="itinéraire">
      <h3 class="center top50">itinéraire</h3>
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
        top: calc(92px + 210px);
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


</style>