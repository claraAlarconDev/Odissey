<script>
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";
import { thumbsUp } from "ionicons/icons";
import postService from '../service/postService';
export default {
  components: {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
      return { thumbsUp };
  },
  data() {
    return {}
  },
 props: ['id','titulo','descripcion', 'parrafo'],
  methods: {
    async verPost(){
      console.log("id de post "+this.id);
     await this.$router.push(`/post/${this.id}`)
    },
    async deletePost(){
      //await this.$router.push(`/post`)
      await postService.deletePostById(this.id);
    }
  }
}
</script>

<template>
    <ion-card color="light">
    <ion-card-header>
      <ion-card-title>{{ titulo }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>{{ descripcion }}</ion-card-content>
    <ion-button fill="clear" @click="verPost()">Ver mas</ion-button>
    <ion-button fill="clear">Calificar</ion-button>
    <ion-button fill="clear" @click="deletePost()" > Borrar </ion-button>
      <ion-button>
        <ion-icon :icon="thumbsUp"></ion-icon>
      </ion-button>
  </ion-card>
</template>
