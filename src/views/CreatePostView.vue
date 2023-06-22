<template>
  <ion-page>
        <ion-content>
            <ion-title>¡Crea tu Post!</ion-title>

            <ion-input v-model="post.titulo" placeholder="Ingresa el titulo "> </ion-input>
            <ion-input v-model="post.descripcion" placeholder="Ingresa la descripción"> </ion-input>
            <ion-input v-model="post.parrafo" placeholder= "Ingresa el parrafo"> </ion-input>
            <ion-input v-model="post.userEmail" placeholder="Ingresa tu email"> </ion-input>

            <ion-button @click="crearPost" > Crear Post!</ion-button>
        </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonContent, IonButton, IonInput, IonTitle} from '@ionic/vue';
import postService from '../service/postService.js';
export default {
    data(){
        return {
            post: {}
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
        console.log(post);
        await postService.createPost(post)
    }
   }
}
</script>

<style>

</style>