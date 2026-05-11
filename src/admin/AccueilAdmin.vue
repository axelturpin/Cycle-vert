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

    <div class="col-center">
        <h3>Consignes pour les clients</h3>
        <textarea name="consignes" id="" placeholder="Envoyer demande de collecte 1 semaine en avance"></textarea>
    </div>

</template>

<style scoped>
textarea{
    width: 50vw;
    height: 100px;
}
</style>