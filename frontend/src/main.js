import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import { createRouter, createWebHistory } from 'vue-router'
import PatientsListVue from './pages/PatientsList.vue'
import PatientEdit from './pages/PatientEdit.vue'
import PatientAdd from './pages/PatientAdd.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: PatientsListVue },
    { path: '/add', component: PatientAdd },
    { path: '/edit/:id', component: PatientEdit }
  ],
});

createApp(App).use(router).mount('#app')
