<template>
  <ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-searchbar
        show-cancel-button="never"
        :debounce="1000"
        @ionInput="handleInput($event)"
      ></ion-searchbar>
    </ion-toolbar>
  </ion-header>
    <ion-content>
      <ion-list v-for="p in listaPosts" :key="p.titulo">
        <post-list-item-template
          :id="p.id"
          :titulo="p.titulo"
          :descripcion="p.descripcion"
          :parrafo="p.parrafo"
          :puedeBorrar="p.userEmail == this.userEmail"
        />
      </ion-list>
    </ion-content>
  </ion-page>

</template>

<script>
import {
  IonPage,
  IonButton,
  IonInput,
  IonList,
  IonContent,
  IonHeader,
  IonSearchbar,
  IonToolbar,
} from "@ionic/vue";
import { add } from "ionicons/icons";
import PostListItemTemplate from "../components/PostListItemTemplate.vue";
import postService from "../service/postService.js";
import { useLoginStore } from "../stores/login";

export default {
  components: {
    IonPage,
    IonButton,
    IonContent,
    IonInput,
    IonList,
    PostListItemTemplate,
    IonHeader,
    IonSearchbar,
    IonToolbar,
  },
  setup() {
    return { add };
  },
  data() {
    return {
      allPosts: [],
      listaPosts: [],
      post: {},
      userEmail: useLoginStore().getUserEmail,
    };
  },
  async beforeUpdate() {
    this.allPosts = await postService.listAllPosts();
    this.listaPosts = this.allPosts;
  },
   async mounted() {
    this.allPosts = await postService.listAllPosts();
    this.listaPosts = this.allPosts;
  },
  methods: {
    async irAbout() {
      await this.$router.push("/about");
    },
    handleInput(event) {
      const query = event.target.value.toLowerCase();
      this.listaPosts = this.allPosts.filter(
        (p) => p.titulo.toLowerCase().indexOf(query) > -1
      );
    },
  },
};
</script>

<style>

</style>
