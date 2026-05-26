<script>
import NavAdmin from '@/components/NavAdmin.vue';
export default {
    components: {
        NavAdmin,
    },
    data() {
        return {
            collectes: [],
            valorisations: [],
        }
    },
    methods: {
        toLocaleDateString(date) {
            const tempDate = new Date(date);
            if (Number.isNaN(tempDate.getTime())) {
                return 'date NaN';
            }
            return tempDate.toLocaleDateString('fr-FR');
        },
        normalizeDateValue(value) {
            if (!value) {
                return '';
            }
            if (value instanceof Date) {
                return value.toISOString().slice(0, 10);
            }
            const stringValue = String(value).trim();
            if (/^\d{4}-\d{2}-\d{2}$/.test(stringValue)) {
                return stringValue;
            }
            if (/^\d{2}\/\d{2}\/\d{4}$/.test(stringValue)) {
                const [day, month, year] = stringValue.split('/');
                return `${year}-${month}-${day}`;
            }
            const parsed = new Date(stringValue);
            if (!Number.isNaN(parsed.getTime())) {
                return parsed.toISOString().slice(0, 10);
            }
            return '';
        },
        normalizeCollecte(collecte) {
            return {
                collecteur: collecte.collecteur || '',
                lieu: collecte.lieu || '',
                date: this.normalizeDateValue(collecte.date),
                heure: collecte.heure || '',
                bac: collecte.bac || '',
                echange: collecte.echange === true || collecte.echange === 'true',
                temperature: collecte.temperature || '',
                poids: collecte.poids || '',
            };
        },
        enregistrer(index) {
            const collecte = this.collectes[index];
            if (!collecte) {
                return;
            }
            localStorage.setItem('historique-collecteur', JSON.stringify(this.collectes));
            console.log('Collecte enregistrée', collecte);
        },
    },
    mounted() {
        const storage = JSON.parse(localStorage.getItem('historique-collecteur')) || [];
        this.collectes = Array.isArray(storage) ? storage.map(this.normalizeCollecte) : [];
        this.valorisations = JSON.parse(localStorage.getItem('valorisation')) || [];
        console.log(this.collectes);
    },
}
</script>

<template>
    <NavAdmin></NavAdmin>

    
    <h2 class="center">Suivi compost</h2>
    <div class="valorisation  top50">
      <h3 class="center">valorisation</h3>
      <div class="cartes" >
        <table class="col-center" v-for="(val, index) in valorisations" :key="index">
            <tbody>
                    <tr><th>Andain: {{ val.andain }}</th></tr>
                    <tr><th>Lieu: {{ val.lieu }}</th></tr>
                    <tr><th>Date: {{ val.date }}</th></tr>
                    <tr><th>Heure {{ val.heure }}</th></tr>
                    <tr><th>étape: 
                        {{ val.etape }}
                    </th></tr>
                    <tr><th>NFU: <p v-if="val.NFU">Valider</p></th></tr>
                    <!-- <tr><th><label for="check2">Higiénisation: </label><input type="checkbox" v-model="check2" id="check2"></th></tr> -->
                    <tr><th>températue en °C: {{ val.temperature }}</th></tr>
                    <tr><th>Date relevé à faire: {{ "aujourd'hui" }}</th></tr>
                    
                    <tr><th>compteur 55°C / 7 jours: <br>
                      <div class="center">relevé 1: Date: {{ val.daterelevé1 }} {{ val.checkRelevé1 }}</div>
                      <div class="center">relevé 2: Date: {{ val.daterelevé2 }} {{ val.checkRelevé3 }}</div>
                      <div class="center">relevé 3: Date: {{ val.daterelevé3 }} {{ val.checkRelevé3 }}</div>
                    </th></tr>
                    <tr><th>contrôle 3 relevés / semaine</th></tr>
                    <!-- <tr><th><button class="btn" @click="enregistrer">Enregistrer analyses</button></th></tr> -->
                    <tr><th><div class="center"><button class="btn">Historique de l'andain</button></div></th></tr>

            </tbody>
        </table>
    <div class="historique-collecteur">
        <h3 class="center">historique collecteur</h3>
      <div class="cartes">
        <table class="col-center" v-for="(collecte, index) in collectes" :key="index">
            <tbody>
                    <tr><th>Collecteur: {{ collecte.collecteur? collecte.collecteur : "inconnu" }}</th></tr>
                    <tr><th>Lieu: {{ collecte.lieu }}</th></tr>
                    <tr><th>Date: {{ toLocaleDateString(collecte.date) }}</th></tr>
                    <tr><th>Heure: {{ collecte.heure }}</th></tr>
                    <tr><th>nb bac: {{ collecte.bac }}</th></tr>
                    <tr><th><div class="center">échange1:1 {{ collecte.echange }}</div></th></tr>
                    <tr><th>températue: {{ collecte.temperature }}</th></tr>
                    <tr><th>poids en kg: {{ collecte.poids }}</th></tr>
                    <tr><th>Modifier:</th></tr>
                    <tr><th><label :for="'collecteur-'+index">Collecteur: <input :class="'collecteur'+index" type="text" :id="'collecteur-'+index" v-model="collecte.collecteur"></label></th></tr>
                    <tr><th><label :for="'lieu-'+index">Lieu: <input :class="'lieu'+index" type="text" :id="'lieu-'+index" v-model="collecte.lieu"></label></th></tr>
                    <tr><th><label :for="'date-'+index">Date: <input :class="'date'+index" type="date" :id="'date-'+index" v-model="collecte.date"></label></th></tr>
                    <tr><th><label :for="'heure-'+index">Heure: <input :class="'heure'+index" type="time" :id="'heure-'+index" v-model="collecte.heure"></label></th></tr>
                    <tr><th><label :for="'bacs-'+index">nb bac: <input :class="'bac'+index" type="number" :id="'bacs-'+index" v-model="collecte.bac"></label></th></tr>
                    <tr><th><div class="center"><label :for="'echange-'+index">échange1:1 </label><input type="checkbox" :id="'echange-'+index" :class="'checkbox'+index" v-model="collecte.echange"></div></th></tr>
                    <tr><th><label :for="'temperature-'+index">températue: <input :class="'temperature'+index" type="number" :id="'temperature-'+index" v-model="collecte.temperature"></label></th></tr>
                    <tr><th><label :for="'poids-'+index">poids en kg: </label><input :class="'poids'+index" type="number" :id="'poids-'+index" v-model="collecte.poids"></th></tr>
                    <tr><th><button class="btn" @click="enregistrer(index)">Enregistrer</button></th></tr>
            </tbody>
        </table>  
      </div>
    </div>

        <div class="historique-valorisateur"></div>
    </div>
    </div>

</template>

<style scoped>
table {
  border-collapse: collapse;
  background-color: #F3E5AB;
}

thead,
tfoot {
  background-color: #F3E5AB;
}

th{
    border: 2px solid black;
    padding: 8px 10px;
}

td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr{
  background-color: #FAF3E0;
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}

.cartes *{
    margin: 20px;
}

.bac{
    width: 30px;
}
</style>