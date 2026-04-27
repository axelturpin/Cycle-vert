<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header></Header>
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

body{
  background-color: #FAF3E0;
}

.col-center{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  margin: 10px;
  width: 80vw;
  height: 7vh;
}

.top5vh{
  position: absolute;
  top: calc(5vh + 92px);
}

.deconnexion{
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0px;
}

.vh{
    min-height: calc(100vh - 92px - 110px);
}
</style>
