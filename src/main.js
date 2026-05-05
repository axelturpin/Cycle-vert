import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import router from './router'
import NavAdmin from './components/NavAdmin.vue';

const app = createApp(App);
app.component('Header', Header); //besoin avec cette version de vue.js
app.component('Footer', Footer); 
app.component('NavAdmin', NavAdmin); 
const mountedApp = app.use(router)
                        .mount('#app');