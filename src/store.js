import { reactive } from 'vue';

export const store = reactive({
  Accueil: '/accueil-client',
  
  setAccueil(path) {
    this.Accueil = path;
  }
});