<template lang="html">
  <div class="container">
    <h1>Estos son tus posibles candidatos</h1>
    <div v-for="can in candidatos" >
        <p> {{can[1]}} {{can[2]}}</p>
        <button id="logIn" variant="success" @click="votar(can[0])">Votar</button>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rol: sessionStorage.getItem('type'),
      credenciales:{
        pid:sessionStorage.getItem('id'),
        cid: 0
      },
      candidatos:{}

    }
  },
  methods: {
    votar(evt) {
      console.log(sessionStorage.getItem('id'))
      this.credenciales.cid= evt
      console.log(this.credenciales)
      this.$http.post('https://fusepongelecciones.herokuapp.com/votar',this.credenciales)
          .then(response =>{
            alert("Tu voto fue exitoso")
            console.info(response);
            this.isLogged=true;
            this.$router.push('/'+sessionStorage.getItem("type")+'Perfil');
          }, error1 =>{
            alert("Ya Votaste")
            this.error="Error **";
          });
  }
},
  created() {
    this.$http.get('https://fusepongelecciones.herokuapp.com/candidato')
    .then(response =>{
      console.info(response)
      this.candidatos=response.body;
      console.info(this.candidatos)
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>


<style >

</style>
