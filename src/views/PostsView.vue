<template>
  <ion-page>
    <ion-content>
      <h2>Posts</h2>
      <ion-list v-for="p in listaPosts" :key="p.titulo">
        <post-list-item-template :id="p.id" :titulo="p.titulo" :descripcion="p.descripcion" :parrafo="p.parrafo"/>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonList, IonContent } from "@ionic/vue";
import { add } from "ionicons/icons";
import PostListItemTemplate from "../components/PostListItemTemplate.vue";
import postService from "../service/postService.js";

export default {
  components: {
    IonPage,
    IonButton,
    IonContent,
    IonInput,
    IonList,
    PostListItemTemplate
  },
  setup() {
    return { add };
  },
  data() {
    return {
      listaPosts: [],
      post: {},
    };
  },
  async mounted() {
    this.listaPosts = await postService.listAllPosts();
  },
  methods: {
    async irAbout() {
      await this.$router.push("/about");
    },
    /*agregarPost() {
      this.lista.push({ ...this.post });
      this.post = {};
    },*/
  },
};
</script>

<style>
/*
ion-button {
  --background: #250e4b;
  --background-hover: #9ce0be;
  --background-activated: #88f4be;
  --background-focused: #88f4be;

  --color: blue;

  --border-radius: 0;
  --border-color: #000;
  --border-style: solid;
  --border-width: 1px;

  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

  --ripple-color: deeppink;

  --padding-top: 10px;
  --padding-bottom: 10px;
}
*/
</style>
