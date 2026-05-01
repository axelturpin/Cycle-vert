
<script>
export default{
  data(){
    return {
      Accueiltemp: '/accueil-valorisateur'
    }
  },
    provide() {
      return {
        Accueiltemp: this.Accueiltemp
      }
    }
}
</script>

<template>
    <header>
        <router-link :to="this.Accueiltemp || this.Accueil"><img src="/img/Home Page.png" alt="Accueil"></router-link>
        <h1 class="col-center">Cycle vert</h1>
        <router-link to="/notifications-client"><img src="/img/Doorbell.png" alt="Notifications"></router-link>
    </header>

    <router-link to="/" class="btn deconnexion"><div class="div-center">Déconnexion</div></router-link>

   <h2 class="top50 center">Notifications</h2> 
    <div class="notifications top50 center">
        <div class="notif top50 center">
            <p>Notification</p>
        </div>
    </div>
</template>

<style scoped>

    .notif{
        background-color: #F3E5AB;
        width: 180px;
        height: auto;
    }
</style>