<script>
import {IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonFooter} from '@ionic/vue';
import {person} from 'ionicons/icons'

export default {
  components: {IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonFooter},
  data() {
    return {
      person
    };
  },
}

</script>

<template>
  <ion-page class="inactive-justify">
    <h1 class="title">Welcome to Odissey</h1>
    <img src="img\odissey 3.jpeg" class="img_home">
  </ion-page>
</template>

<style>

.title {
  color: #3880ff;
  font-family: "Courier New", Courier, monospace;
  font-size: 150%;
  margin: 5% auto;
}

.img_home {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 400px;
}
.inactive-justify{
  justify-content: unset !important
}
</style>
