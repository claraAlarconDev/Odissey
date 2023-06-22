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
    };
  },
  async mounted() {
    this.allPosts = await postService.listAllPosts();
    this.listaPosts = this.allPosts;
    console.log(this.listaPosts);
  },
  methods: {
    async irAbout() {
      await this.$router.push("/about");
    },
    agregarPost() {
      //this.listaPosts.push({ ...this.post });
      //this.post = {};
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
