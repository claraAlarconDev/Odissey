<script>
import { RouterLink, RouterView } from "vue-router";
import {
  IonApp,
  IonHeader,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonFooter,
  IonTabs,
} from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";
import {
  personOutline,
  homeOutline,
  informationOutline,
  readerOutline,
  logOutOutline,
} from "ionicons/icons";

export default {
  components: {
    IonApp,
    IonHeader,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
    IonFooter,
    IonTabs,
  },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    const { hasPermissions, isLoginn } = store;
    return { store, isLogin, user, hasPermissions, isLoginn };
  },
  data() {
    return {
      personOutline,
      homeOutline,
      informationOutline,
      readerOutline,
      logOutOutline,
    };
  },
};
</script>

<template>
  <ion-app>
    <ion-router-outlet />
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button v-if="!isLogin" tab="about" href="/about">
          <ion-icon :icon="informationOutline"></ion-icon>
          <ion-label>About us</ion-label>
        </ion-tab-button>
        <ion-tab-button v-if="!isLogin" tab="home" href="/home">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button v-if="!isLogin" tab="login" href="/login">
          <ion-icon :icon="personOutline"></ion-icon>
          <ion-label>LogIn</ion-label>
        </ion-tab-button>
        <ion-tab-button v-if="isLogin" tab="posts" href="/post">
          <ion-icon :icon="readerOutline"></ion-icon>
          <ion-label>Posts</ion-label>
        </ion-tab-button>
        <ion-tab-button v-if="isLogin" tab="logout" href="/logout">
          <ion-icon :icon="logOutOutline"></ion-icon>
          <ion-label>LogOut</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<style></style>
