<template lang=html>
  <div class="container espaico">
    <div class="form-group">
      <label for="mail">Cedula:</label>
      <b-form-input id="cedula"
                    v-model="credenciales.cedula">
      </b-form-input>
    </div>
    <div class="form-group">
      <label for="mail">Nombre:</label>
      <b-form-input id="nombre"
                    v-model="credenciales.nombre">
      </b-form-input>
    </div>
    <div class="form-group">
      <label for="mail">Apellido:</label>
      <b-form-input id="apellido"
                    v-model="credenciales.apellido">
      </b-form-input>
    </div>
    <div class="form-group">
      <label for="mail">Correo:</label>
      <b-form-input id="correo"
                    type="email"
                    v-model="credenciales.correo"
                    required
                    placeholder="Ej: oscar@mail.co">
      </b-form-input>
    </div>
    <div class="form-group">
      <label for="mail">Contraseña:</label>
      <b-form-input id="contrasena"
                    type="password"
                    v-model="credenciales.password" >
      </b-form-input>
    </div>
    <div class="form-group">
      <label for="mail">Partido Politico:</label>
      <b-form-input id="partido"
                    v-model="credenciales.partido" >
      </b-form-input>
    </div>
    <div class="form-group">
      <label for="mail">Experiencia:</label>
      <b-form-textarea id="experiencia"
                    v-model="credenciales.experiencia"
                    placeholder = "Ingresa tu experiencia"
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
           nombre:'',
           cedula:'',
           apellido:'',
           password:'',
           correo: '',
           experiencia:'',
           partido:''
         }

       }
     },
     methods:{
       submit(person){
          this.$http.post('https://fusepongelecciones.herokuapp.com/candidato',this.credenciales)
          .then(response =>{
            alert("SUCCESS")
            this.$router.push('/login');
          }, error1=>{
            alert("Candidato no Valido")
            this.error="Candidato no valido";
          });
       }
     },
     created(){

     }
   }
</script>

<style >

</style>
