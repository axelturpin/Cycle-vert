<script>
</script>

<template>

    <div class="col-center block">
    <h2>Page de connexion</h2>
        <!-- boutons plutôt avec le lien dans form action="" -->
        <form action="">
            <div class="col-center">
                <label for="user" class="col-center">e-mail</label>
                <div><input type="email" name="" id="user"></div>
            </div>

            <div class="col-center">
                <label for="mdp" class="col-center">Mot de passe</label>
                <div><input type="password" name="" id="mdp"></div>
            </div>

            <div>
                <router-link to="/accueil-client" class="col-center btn">Connexion client</router-link>
                <router-link to="/accueil-valorisateur" class="col-center btn">Connexion valorisateur</router-link>
            </div>
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