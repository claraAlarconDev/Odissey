<script>
import {
  //IonPage,
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
    }
  }
}
</script>

<template>
    <ion-card color="light">
    <ion-card-header>
      <ion-card-title>{{ titulo }}</ion-card-title>
      <ion-card-subtitle> {{ descripcion }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content> {{ parrafo }}</ion-card-content>
    <ion-button fill="clear" @click="verPost()">Ver mas</ion-button>
    <ion-button fill="clear">Calificar</ion-button>
      <ion-button>
        <ion-icon :icon="thumbsUp"></ion-icon>
      </ion-button>
  </ion-card>
</template>
