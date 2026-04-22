<script setup></script>

<template>
  <router-view/>
  <div>

    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
    <p>or not</p>
    <router-link to="/">Accueil</router-link>
    <router-link to="/connexion">Connexion</router-link>
  </div>
  
  
</template>

<style scoped></style>
