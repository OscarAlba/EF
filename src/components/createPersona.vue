<template lang=html>
  <div class="container espacio">
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
    <hr>
    <b-button id="Register" variant="success" @click="submit()">Registrar</b-button>
  </div>
</template>

<script>
   export default{
     data(){
       return{
         credenciales:{
           cedula: '',
           nombre: '',
           apellido:'',
           password:'',
           correo:''
         },
       }
     },
        methods:{
          submit(person){
            console.info(this.credentials);
            this.$http.post('https://fusepongelecciones.herokuapp.com/persona',this.credenciales)
            .then(response =>{
              alert("SUCCESS")
            this.$router.push('/login');
            }, error1=>{
              alert("Persona no Valida")
            this.error="Usuario no valido";
            });
          }
        },
        created(){

        }
   }
</script>

<style >

</style>
