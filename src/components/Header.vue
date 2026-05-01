<script>
export default{
    name: "Header",
    // props: ["Accueil"],
    data(){
        return{
            Accueil: "/",
        }
    },
    computed(){
        this.Accueiltemp;
        this.Accueil = this.Accueiltemp;
        console.log(this.Accueil);
        console.log(this.Accueiltemp);
    },
    mounted(){
        // this.Accueil = this.Accueiltemp;
    },
    // updated(){
    //     this.Accueil = this.Accueiltemp;
    //     console.log(this.Accueil);
    // },
    inject: [
        'Accueiltemp'
    ]
}
</script>

<template>
    <header>
        <router-link :to="this.Accueiltemp || this.Accueil"><img src="/img/Home Page.png" alt="Accueil"></router-link>
        <h1 class="col-center">Cycle vert</h1>
        <router-link to="/notifications-client"><img src="/img/Doorbell.png" alt="Notifications"></router-link>
    </header>
</template>

<style scoped>
header{
    height: 92px;
    background-color: #A3B18A;
    display: flex;
    justify-content: space-between;
}

</style>