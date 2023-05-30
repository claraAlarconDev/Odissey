<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonFooter, IonTabs } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";
import { personOutline, homeOutline, informationOutline } from 'ionicons/icons'

export default {
  components: { IonApp, IonHeader, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonFooter, IonTabs },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    const { hasPermissions, isLoginn } = store
    return { store, isLogin, user, hasPermissions, isLoginn };
  },
  data() {
    return {
      personOutline,
      homeOutline,
      informationOutline
    };
  }
};
</script>

<template>
  <ion-app>
    <ion-header>
      <RouterLink v-if="isLogin" to="/logout">LogOut |</RouterLink>
    </ion-header>
    <!-- <ion-header>
      <RouterLink to="/">Home |</RouterLink>
      <RouterLink to="/about">About |</RouterLink>
      <RouterLink v-if="isLogin" to="/system">System |</RouterLink>
      <RouterLink v-if="isLogin && hasPermissions('config')" to="/config">Config |</RouterLink>
      <RouterLink v-if="!isLogin" to="/login">Login |</RouterLink>
      <RouterLink v-if="isLogin" to="/logout">Logout</RouterLink>
      Usuario: {{ user.email }}
    </ion-header> -->
    <ion-router-outlet />
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="about" href="/about">
          <ion-icon :icon="informationOutline"></ion-icon>
          <ion-label>About us</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="login" href="/login">
          <ion-icon :icon="personOutline"></ion-icon>
          <ion-label>LogIn</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<style></style>
