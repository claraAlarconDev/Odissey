<script>
import {
  IonPage,
  IonButton,
  IonInput,
  IonList,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";
import { add } from "ionicons/icons";
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
      return { add };
  },
  data() {
    return {}
  },
  props: ['id','nombre'],
}
</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ id }}</ion-card-title>
      <ion-card-subtitle>Arsenal</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      El jugador se llama {{ nombre }}
    </ion-card-content>
    <ion-button fill="clear">Ver mas</ion-button>
    <ion-button fill="clear">Calificar</ion-button>
    <ion-fab>
      <ion-fab-button>
        <ion-icon :icon="add">Agregar a mis favoritos</ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-card>
</template>
