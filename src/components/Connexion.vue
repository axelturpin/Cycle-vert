<script>
</script>

<template>

    <div class="col-center block">
    <h2>Page de connexion</h2>
        <form action="">
            <div>
                <label for="user" class="col-center">e-mail</label>
                <div><input type="email" name="" id="user"></div>
            </div>

            <div>
                <label for="mdp" class="col-center">Mot de passe</label>
                <div><input type="password" name="" id="mdp"></div>
            </div>

            <router-link to="/accueil-client" class="col-center btn">Connexion client</router-link>
        </form>
    </div>

</template>

<style scoped>
h2{
    margin-bottom: 20px;
}

form{
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 20px;
}

</style>