import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import createCandidato from '../components/createCandidato.vue'
import createPersona from '../components/createPersona.vue'
import createProposal from '../components/createProposal.vue'
import Login from '../components/Login.vue'
import PersonaPerfil from '../components/PersonaPerfil.vue'
import CandidatoPerfil from '../components/CandidatoPerfil.vue'
import Votar from '../components/Votar.vue'

Vue.use(VueRouter)

export const routes =[
  {
    path:'/createCandidato.vue',
    name:'createCandidato',
    component: createCandidato
  },
  {
    path:'/createPersona.vue',
    name:'createPersona',
    component: createPersona
  },
  {
    path:'/createProposal.vue',
    name:'createProposal',
    component: createProposal
  },
  {
      path: '/Login.vue',
      name: 'Login',
      component: Login
  },
  {
      path: '/PersonaPerfil.vue',
      name: 'PersonaPerfil',
      component: PersonaPerfil
  },
  {
      path: '/CandidatoPerfil.vue',
      name: 'CandidatoPerfil',
      component: CandidatoPerfil
  },
  {
      path: '/Votar.vue',
      name: 'Votar',
      component: Votar
  }

];
