<template>
    <ion-page>
      <ion-content>
      <h2 class="textos">Registrarse</h2>
      
        <ion-list>
          <div>
            <ion-img src="..\..\img\odissey 2.jpeg" class="img"></ion-img>
          </div>
          <div>
            <ion-input class="text-area" v-model="usuario.name" label="Enter your username" label-placement="floating" fill="outline" type="text" style="text-align:center"/>
          </div>
          <div>
            <ion-input class="text-area" v-model="usuario.email" label="Enter your email" label-placement="floating" fill="outline" type="email" style="text-align:center"/>
          </div>
          <div>
            <ion-input class="text-area" v-model="usuario.passw" label="Enter your password" label-placement="floating" fill="outline" type="password" style="text-align:center"/>
          </div>
          <div>
            <ion-input class="text-area" v-model="usuario.passwConf" label="Confirm password" label-placement="floating" fill="outline" type="password" style="text-align:center"/>
          </div>
        </ion-list>
        <div>
          <ion-button @click="registrar" class="boton"> REGISTRAR </ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import {
    IonPage,
    IonButton,
    IonInput,
    IonItem,
    IonList,
    IonContent,
    IonCardTitle,
    IonImg
  } from "@ionic/vue";
  import { useLoginStore } from "../stores/login";
  import userService from "../service/userService.js";
  export default {
    components: {
      IonPage,
      IonButton,
      IonInput,
      IonItem,
      IonList,
      IonContent,
      IonCardTitle,
      IonImg
    },
    data() {
      return {
        usuario: { userName:"", userEmail: "", userPassword: "", userPasswordConfirm: "" },
      };
    },
    setup() {
      return {  };
    },
    methods: {
      async registrar() {
        try{
            if(this.usuario.name == null || this.usuario.name.trim() == "" ){
              throw "Debe ingresar un nombre de usuario"
            }
             if(this.usuario.email == null || this.usuario.email.trim() == "" ){
              throw "Debe ingresar un email valido"
            }
            if(this.usuario.passw == null || this.usuario.passw.trim() == "" ){
              throw "La contraseña no puede ser vacia"
            }
            if(this.usuario.passw.trim() != this.usuario.passwConf ){
              throw "La contraseñas no coinciden"
            }

          await userService.registry({ userName:this.usuario.name.trim(), userPassword: this.usuario.passw.trim(), userEmail: this.usuario.email.trim()})
          this.usuario = { userName:"", userEmail: "", userPassword: "", userPasswordConfirm: "" }
          this.$router.push("/login");
        } catch (error) {
          alert("Error: " + error );
        }
      },
    },
  };
  </script>
  
  <style>
  
  .textos {
    color: #3880ff;
    font-family: "Courier New", Courier, monospace;
    font-size: 150%;
    margin: 5% auto;
    text-align: center;
  }
  
  .boton {
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 150%;
    font-family: "Courier New", Courier, monospace;
  }
  
  .text-area {
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    font-family: "Courier New", Courier, monospace;
  }
  
  .img {
    margin: 5% auto;
    width: 90%;
    max-width: 400px;
    alt: centered
  }
  </style>
  