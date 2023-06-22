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
import postService from "../service/postService";
import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/login.js";

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
   // return {  };
    const store = useLoginStore();
    const { isLogin, user} = storeToRefs(store);
    const { hasPermissions, isLoginn } = store;
    return { store, isLogin, user, hasPermissions, isLoginn, thumbsUp };
  },
  data() {
    return {
      //isAdmin: this.hasPermissions(["config"])
    };
  },
  props: ["id", "titulo", "descripcion", "parrafo", "puedeBorrar"],
  methods: {
    async verPost() {
      console.log("id de post " + this.id);
      await this.$router.push(`/post/${this.id}`);
    },
    async deletePost() {
      if(this.puedeBorrar){
        await postService.deletePostById(this.id).then(this.$router.push(`/post`));
      } else {
        alert("solo puedes borrar posts creados por ti")
      }
    }
  },
};
</script>

<template>
  <ion-card color="light">
    <ion-card-header>
      <ion-card-title>{{ titulo }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>{{ descripcion }}</ion-card-content>
    <ion-button fill="clear" @click="verPost()">Ver mas</ion-button>
    <ion-button fill="clear">Calificar</ion-button>
    <ion-button fill="clear"  @click="deletePost()" v-if="puedeBorrar"  > Borrar </ion-button>
    <ion-button>
      <ion-icon :icon="thumbsUp"></ion-icon>
    </ion-button>
  </ion-card>
</template>
