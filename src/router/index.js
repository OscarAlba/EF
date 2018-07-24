import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import createCandidato from '../components/createCandidato'
import createPersona from '../components/createPersona'
import createProposal from '../components/createProposal'
import Login from '../components/Login'
import PersonaPerfil from '../components/PersonaPerfil'
import CandidatoPerfil from '../components/CandidatoPerfil'
import Votar from '../components/Votar'

Vue.use(VueRouter)

export const routes =[
  {
    path:'/createCandidato',
    name:'createCandidato',
    component: createCandidato
  },
  {
    path:'/createPersona',
    name:'createPersona',
    component: createPersona
  },
  {
    path:'/createProposal',
    name:'createProposal',
    component: createProposal
  },
  {
      path: '/Login',
      name: 'Login',
      component: Login
  },
  {
      path: '/PersonaPerfil',
      name: 'PersonaPerfil',
      component: PersonaPerfil
  },
  {
      path: '/CandidatoPerfil',
      name: 'CandidatoPerfil',
      component: CandidatoPerfil
  },
  {
      path: '/Votar',
      name: 'Votar',
      component: Votar
  }

];
