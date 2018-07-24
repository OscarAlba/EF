<template>
    <div class="container">
      <h2>Iniciar sesión</h2>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <label for="mail">Cedula:</label>
        <input
          id="mail"
          class="form-control"
          placeholder="Numero de identificacion"
          v-model="credentials.cedula"
          required
        >
      </div>
      <div class="form-group">
        <label for="pass">Contraseña:</label>
        <input
          id="pass"
          type="password"
          class="form-control"
          placeholder="Contraseña"
          v-model="credentials.password"
          required
        >
      </div>
      <b-button id="logIn" variant="success" @click="submit()">Ingresar</b-button>
      <hr>
      <router-link tag="li" to="/createPersona">
        <a>Registro para Votante</a>
      </router-link>
      <router-link tag="li" to="/createCandidato">
        <a>Registro para Candidato</a>
      </router-link>
    </div>
  </template>

  <script>
  import router from "../router/index"
  import { eventBus } from '../main'
  export default {
    data() {
      return {
        credentials: {
          cedula: '',
          password: ''
        },
        error: '',
        isLogged: false
      }
    },
    methods: {
      submit() {
        console.info(this.credentials);
        this.$http.post('https://fusepongelecciones.herokuapp.com/sessions/login/',this.credentials)
            .then(response =>{
              console.info(response);
              this.isLogged=true;
              eventBus.$emit('someoneSignedIn', {isLogged: this.isLogged, type: response.body.type});
              sessionStorage.setItem('id', response.body.user.id);
              sessionStorage.setItem('cedula', response.body.user.cedula);
              sessionStorage.setItem('correo', response.body.user.correo);
              sessionStorage.setItem('nombre', response.body.user.nombre);
              sessionStorage.setItem('apellido', response.body.user.apellido);
              sessionStorage.setItem('type', response.body.type);
              this.$router.push('/'+sessionStorage.getItem("type")+'Perfil');
            }, error1 =>{
              this.error="Usuario o contraseña incorrecta";
            });
      }
    },
    created() {
      eventBus.$on('someoneSignedOut', (isLogged) =>{
        this.isLogged = isLogged;
      });
    }
  }
  </script>

  <style >

  </style>
