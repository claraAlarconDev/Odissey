<template>
  <ion-page>
    <ion-content>
          <ion-img src="..\..\img\odissey 2.jpeg" class="imgpost"></ion-img>
      <h2 class="textos">{{this.post.titulo}}</h2>
      <ion-list>
        
        <div class="post-text">
          {{this.post.descripcion}}
        </div>
        
        <ion-item>
          
       </ion-item>
       
        <div class="post-text">
          {{this.post.parrafo}}
        </div>

      </ion-list>
    </ion-content>
    
  </ion-page>
</template>

<script>
import postService from "../service/postService.js";
import {IonPage, IonContent} from "@ionic/vue";
export default {
    components:{
        IonPage, 
        IonContent
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

.imgpost {
  margin: 5% auto;
  width: 30%;
  max-width: 100px;
  alt: centered;
}

.post-text {
  color: black;
  font-family: "Courier New", Courier, monospace;
  font-size: 100%;
  width: 90%;
  margin-left: 5%;
}
</style>