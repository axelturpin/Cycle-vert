<script>
export default{
    name: "Header"
}
</script>

<template>
    <header>
        <router-link to="/accueil-client"><img src="/img/Home Page.png" alt="Accueil"></router-link>
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