<template>
  <ion-page>
        <ion-content>
            <ion-title style="text-align:center"  class="textos" >¡Crea tu Post!</ion-title>

            <ion-input class="text-area"  fill="outline" style="text-align:center" v-model="post.titulo" placeholder="Ingresa el titulo "> </ion-input>
            <ion-input class="text-area"  fill="outline" style="text-align:center" v-model="post.descripcion" placeholder="Ingresa la descripción"> </ion-input>
            <ion-input  class="text-area"  fill="outline" style="text-align:center"  v-model="post.parrafo" placeholder= "Ingresa el parrafo"> </ion-input>
            <ion-input ref="input" helper-text="Enter a valid email" error-text="Invalid email" @ionInput="validate" @ionBlur="markTouched" class="text-area" fill="outline" type="email" style="text-align:center" v-model="post.userEmail" placeholder="Ingresa tu email"> </ion-input>

            <ion-button  class="boton" @click="crearPost" > Crear Post!</ion-button>
        </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonContent, IonButton, IonInput, IonTitle} from '@ionic/vue';
import { defineComponent } from 'vue';
import postService from '../service/postService.js';
export default defineComponent({
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
    },
    validateEmail(email) {
        return email.match(
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
      },

      validate(ev) {
        const value = ev.target.value;

        this.$refs.input.$el.classList.remove('ion-valid');
        this.$refs.input.$el.classList.remove('ion-invalid');

        if (value === '') return;

        this.validateEmail(value)
          ? this.$refs.input.$el.classList.add('ion-valid')
          : this.$refs.input.$el.classList.add('ion-invalid');
      },

      markTouched() {
        this.$refs.input.$el.classList.add('ion-touched');
      },
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