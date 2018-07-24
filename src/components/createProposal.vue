<template lang=html>
  <div class="container espaico">
    <div class="form-group">
      <label for="mail">Titulo:</label>
      <b-form-input id="titulo"
                    v-model="credenciales.titulo" >
      </b-form-input>
    </div>
    <div class="form-group">
      <label for="mail">Descripcion:</label>
      <b-form-textarea id="descripcion"
                    v-model="credenciales.descripcion"
                    placeholder = "Ingresa la descripcion de la propuesta"
                    :rows="3"
                     :max-rows="6">
      </b-form-textarea>
    </div>
    <hr>
    <b-button id="Register" variant="success" @click="submit()">Registrar</b-button>
  </div>

</template>

<script>
   export default{
     data(){
       return{
         credenciales:{
           titulo:'',
           descripcion:'',
           candidato_id: sessionStorage.getItem('id')
         },
       }
     },
     methods:{
       submit(person){
         console.log(this.credenciales);
          this.$http.post('https://fusepongelecciones.herokuapp.com/proposal',this.credenciales)
          .then(response =>{
            alert("SUCCESS")
            this.$router.push('/CandidatoPerfil');
          }, error1=>{
            alert("WRONG")
            this.error="Propuesta no valida";
          });
       }
     },
     created(){

     }
   }
</script>

<style >

</style>
