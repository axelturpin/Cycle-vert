<script>
import { useRoute } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { computed } from 'vue';
import { store } from './store';

export default {
  components: { Header },
  // setup() {
    // const route = useRoute()

    // Propriété calculée basée sur la route courante
    // const AccueilRole = computed(() => route.meta.Accueil || '/')

    // return { AccueilRole }
//     return { AccueilRole: store.Accueil }
//   }
}
</script>

<template>
  <!-- <Header></Header> -->
  <!-- <Header :Accueil="AccueilRole"></Header> -->
  <div class="vh">
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<style>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

header{
    height: 92px;
    background-color: #A3B18A;
    display: flex;
    justify-content: space-between;
}

body{
  background-color: #FAF3E0;
}

.col-center{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.center{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block{
    background-color: #F3E5AB;
}

.btn{
  text-decoration: none;
  color: black;
  background-color: #A3B18A;
  border-radius: 20px;
  padding: 5px 20px;
  margin: 10px;
}

.big-btn{
  text-decoration: none;
  color: black;
  background-color: #A3B18A;
  border-radius: 20px;
  padding: 5px 20px;
  margin: 18px;
  width: calc(30vw + 100px);
  height: 7vh;
}

.top90{
  position: relative;
  top: 90px;
}

.top50{
  position: relative;
  top: 50px;
}

.top0{
    position: relative;
  top: 0px;
}

.deconnexion{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
}

.vh{
    min-height: calc(100vh - 110px - 50px);
    /* min-height: calc(100vh - 92px - 110px); */
}

.none{
    text-decoration: none;
    color: black;
}

.notif{
  background-color: rgb(255, 78, 78);
}

@media (min-width: 1024px) {

.deconnexion{
  display: flex;
  position: absolute;
  right: 0px;
  width: 200px;
  height: 50px;
}

}
</style>
