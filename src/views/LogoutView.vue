<template>
  <ion-page>
    <ion-content>
      <h2 class="textos">¡Adios! nos vemos luego</h2>
      <ion-button @click="unloger" class="boton"> Log out </ion-button>
    </ion-content>  
  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonContent } from '@ionic/vue'
import { useLoginStore } from "../stores/login";
export default {
  components: {IonPage, IonButton, IonContent },
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    return { logout };
  },
  methods: {
    unloger() {
      this.logout()
      this.$router.push("/home")
    }
  }
}
</script>

<style>
.boton {
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 150%;
  font-family: "Courier New", Courier, monospace;
}

.textos {
  color: #3880ff;
  font-family: "Courier New", Courier, monospace;
  font-size: 150%;
  margin: 5% auto;
  text-align: center;
  align-content: center;
}

</style>
