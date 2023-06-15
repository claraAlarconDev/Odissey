<template>
  <ion-page>
    <!--{{this.$route.params.id}}-->
     <h1>Detalle</h1>
     id {{this.$route.params.id}}
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
      this.post = await postService.getPostById(this.$route.params.id);
    },
    methods:{
      
    },
    setup(){
        return{};
    },
    data(){
        post:{}
    }
}
</script>

<style>

</style>