<template>
  <ion-page>
        <ion-content>
            <ion-title style="text-align:center"  class="textos" >¡Crea tu Post!</ion-title>

            <ion-input class="text-area"  fill="outline" style="text-align:center" v-model="post.titulo" placeholder="Ingresa el titulo "> </ion-input>
            <ion-input class="text-area"  fill="outline" style="text-align:center" v-model="post.descripcion" placeholder="Ingresa la descripción"> </ion-input>
            <ion-input  class="text-area"  fill="outline" style="text-align:center"  v-model="post.parrafo" placeholder= "Ingresa el parrafo"> </ion-input>

            <ion-button  class="boton" @click="crearPost" > Crear Post!</ion-button>
        </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonContent, IonButton, IonInput, IonTitle} from '@ionic/vue';
import { defineComponent } from 'vue';
import postService from '../service/postService.js';
import { useLoginStore } from "../stores/login";
export default defineComponent({
    data(){
        return {
            post: {titulo: "", descripcion: "", parrafo: "", userEmail: useLoginStore().getUserEmail}
        }
    },
   components: {
    IonPage, 
    IonContent, 
    IonButton, 
    IonInput,
    IonTitle
   },
   methods: {
    async crearPost(){
      const post = {...this.post}
      console.log(this.post)
      await postService.createPost(post)
      this.post = {titulo: "", descripcion: "", parrafo: "", userEmail: useLoginStore().getUserEmail}
      this.$router.push("/post");
    }
   }

})
</script>

<style>


.textos {
  color: #3880ff;
  font-family: "Courier New", Courier, monospace;
  font-size: 150%;
  margin: 5% auto;
  text-align: center;
  align-content: center;
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
</style>