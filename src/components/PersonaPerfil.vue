<template lang="html">
  <div class="container">
    <p>A continucacion veras el nombre del candidato con sus respectivas propuestas</p>
    <div v-for="can in candidatos" >
          <B>{{can.Nombre}} {{can.Apellido}}</B>
          <div v-for ="r in can.propuestas">
              <p>{{r}}</p>
          </div>
    </div>
    <hr>
    <button id="logIn" @click='votar()'>Votar</button>
    <button id="logIn" @click='logout()'>Cerrar Sesion</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      rol: sessionStorage.getItem('type'),
      candidatos:{},
      propuestas: {}
    }
  },
  methods: {
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
          this.propuestas[this.candidatos[i][1]]= {};
        }

        for (var i=0;i<this.candidatos.length;i++){
            if(this.candidatos[i][1] in this.propuestas){
              this.propuestas[this.candidatos[i][1]]["Nombre"] = this.candidatos[i][1];
              this.propuestas[this.candidatos[i][1]]["Apellido"] = this.candidatos[i][2];
              this.propuestas[this.candidatos[i][1]]["propuestas"] =[];
            }
        }
        for (var i=0;i<this.candidatos.length;i++){
            if(this.candidatos[i][1] in this.propuestas){
              this.propuestas[this.candidatos[i][1]]["propuestas"].push(this.candidatos[i][3]);
            }
          }
      console.log(this.propuestas);
      this.candidatos=this.propuestas;

    }, error1 =>{
      console.info(error1);
    });
  }

}


</script>

<style >

</style>
