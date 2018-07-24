<template>
  <div class="">
    <b-jumbotron header="Elecciones" lead="Recuerda ejercer tu derecho al voto" >
        <p>Elecciones</p>
      </b-jumbotron>
      <b-button id="logIn" @click='ingresar()'>INGRESAR</b-button>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  methods:{
    ingresar(){
      this.$router.push('/login');
    }
  }
}
</script>

<style>
.mobile{
  padding-bottom: 20%;
}
body {
  background-color: #F3F6FA;
  margin-bottom: 50%;
}
.espacio{
  margin-bottom: 30%;
}
body {
  margin-bottom: 30%;
  background-color: #F3F6FA !important;
  font-family: 'Oxygen', sans-serif !important;
}
</style>
