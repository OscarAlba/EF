<template lang="html">
  <div class="container">
    <p>Asi van los candidatos</p>

    <div v-for="can in candidatos" >
      <table style="width:100%">
        <tr>
          <th> Nombre Candidato </th>
          <th>Cantidad de Votos</th>
        </tr>
        <tr>
          <td>{{can[0]}} {{can[1]}} </td>
          <td> {{can[2]}} </td>
        </tr>
      </table>
    </div>
    <hr>
    <button id="logIn" @click='votar()'>Votar</button>
    <button id="log" @click='pro()'>Registrar Propuesta</button>
    <button id="In" @click='logout()'>Cerrar Sesion</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ['Nombre','Apellido','Cantidad de votos'],
      rol: sessionStorage.getItem('type'),
      candidatos:[],
      propuestas: {}

    }
  },
  methods: {
    pro(){
      this.$router.push('/createProposal');
    },
    votar(){
      this.$router.push('/votar');
    },
    logout(){
      this.$http.delete('https://fusepongelecciones.herokuapp.com/sessions')
      sessionStorage.clear();
      this.isLogged = false;
      this.type=''
      this.$router.push('/login');
    }
  },
  created() {
    this.$http.get('https://fusepongelecciones.herokuapp.com/candidatos')
    .then(response =>{
      this.candidatos = response.body;
      for (var i=0;i<this.candidatos.length;i++){
          this.propuestas[this.candidatos[i][1]]= [];
        }
      for (var i=0;i<this.candidatos.length;i++){
        if(this.candidatos[i][1] in this.propuestas){
          this.propuestas[this.candidatos[i][1]].push(this.candidatos[i][1]);
          this.propuestas[this.candidatos[i][1]].push(this.candidatos[i][2]);
          this.propuestas[this.candidatos[i][1]].push(this.candidatos[i][4]);
         }
      }
      console.log(this.propuestas);
      this.candidatos=this.propuestas
      // this.propuestas=response.body;
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style >

</style>
