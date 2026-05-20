<script>
import NavAdmin from '@/components/NavAdmin.vue';
    export default{
        data(){
            return{

            }
        }
    }
</script>

<template>
    <NavAdmin></NavAdmin>

    <h2 class="center">Suivi collectes</h2>
    <div class="col-center">
        <p>Aller dans stats collecte pour avoir l'historique des colllectes</p>
        <h3>Anomalies</h3>
        <div class="clients">
            <div class="col-center client">
                <p>Client: </p>
                <p>Anomalie: </p>
                <img src="" alt="Anomalie">
                <textarea name="retour" id="">retour sur l'anomalie</textarea>
                <button class="btn">Envoyer</button>
            </div>
            <div class="col-center client">
                <p>Client: </p>
                <p>Anomalie: </p>
                <img src="" alt="Anomalie">
                <textarea name="retour" id="">retour sur l'anomalie</textarea>
                <button class="btn">Envoyer</button>
            </div>
        </div>
    </div>

</template>

<style scoped>
.client{
    min-width: 50vw;
    min-height: 240px;
    background-color: #F3E5AB;
    font-size: 1.2rem;
}

textarea{
    min-width: 30vw;
    min-height: 120px;
}
</style>