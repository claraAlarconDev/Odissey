<template>
  <ion-page>
     <h1 class="textos">{{this.post.titulo}}</h1>
     <h1>{{this.post.id}} {{this.post.descripcion}} {{this.post.parrafo}}</h1>
  </ion-page>
</template>

<script>
import postService from "../service/postService.js";
import {IonPage} from "@ionic/vue";
export default {
    components:{
        IonPage
    },
    async mounted(){
      this.post =  await postService.getPostById(this.$route.params.id);
      console.log(this.post)
    },
    methods:{  
    },
    setup(){
        return{};
    },
    data(){
      return {
        post:{}
      }
    }
}
</script>

<style>

</style>