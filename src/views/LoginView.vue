<template>
  <ion-page>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-card-title class="textos">LogIn</ion-card-title>
        </ion-item>

        <div>
          <ion-img src="..\..\img\odissey 2.jpeg" class="img"></ion-img>
        </div>

        <ion-item>
          <ion-card-title class="textos">EMAIL</ion-card-title>
        </ion-item>

        <div>
          <ion-input v-model="usuario.email" placeholder="enter your email" type="email" style="text-align: center;background-color: lightgray;"></ion-input>
        </div>

        <ion-item>
          <ion-card-title class="textos">PASSWORD</ion-card-title>
        </ion-item>

        <div>
          <ion-input v-model="usuario.passw"  placeholder="enter your password" type="password" style="text-align: center;background-color: lightgray;"></ion-input>
        </div>
      </ion-list>
      <div>
        <ion-button @click="logear" class="boton"> LOGIN </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonButton,
  IonInput,
  IonItem,
  IonList,
  IonContent,
  IonCardTitle,
} from "@ionic/vue";
import { useLoginStore } from "../stores/login";
export default {
  components: {
    IonPage,
    IonButton,
    IonInput,
    IonItem,
    IonList,
    IonContent,
    IonCardTitle,
  },
  data() {
    return {
      usuario: { email: "", passw: "" },
    };
  },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  methods: {
    logear() {
      // consultar api por usuario
      // por hoy hardcodeamos
      if (
        this.usuario.email == "1" &&//"usuario@test.com" &&
        this.usuario.passw == "1"//"123456"
      ) {
        this.login({ email: this.usuario.email, permissions: [] });
        this.$router.push("/post");
      } else if (
        this.usuario.email == "admin@test.com" &&
        this.usuario.passw == "123456"
      ) {
        this.login({ email: this.usuario.email, permissions: ["config"] });
        this.$router.push("/");
      } else {
        alert("Credenciales erroneas");
      }
    },
  },
};
</script>

<style>

.textos {
  color: #3880ff;
  font-family: "Courier New", Courier, monospace;
  font-size: 150%;
  margin: 5% auto;
}

.boton {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 150%;
  font-family: "Courier New", Courier, monospace;
}

.img {
  margin: 5% auto;
  width: 90%;
  max-width: 400px;
  alt: centered
}
</style>
