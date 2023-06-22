<template>
  <ion-page>
    <ion-content>
    <h2 class="textos">LogIn</h2>
    
      <ion-list>
        <div>
          <ion-img src="..\..\img\odissey 2.jpeg" class="img"></ion-img>
        </div>
        <div>
          <ion-input class="text-area" v-model="usuario.email" label="Enter your email" label-placement="floating" fill="outline" type="email" style="text-align:center"/>
        </div>
        <div>
          <ion-input class="text-area" v-model="usuario.passw" label="Enter your password" label-placement="floating" fill="outline" type="password" style="text-align:center"/>
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
  IonImg
} from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import userService from "../service/userService.js";
export default {
  components: {
    IonPage,
    IonButton,
    IonInput,
    IonItem,
    IonList,
    IonContent,
    IonCardTitle,
    IonImg
  },
  data() {
    return {
      usuario: { userEmail: "", userPassword: "" },
    };
  },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  methods: {
    logear() {
    //this.usuario = userService.login(this.usuario);
    //console.log(this.usuario)
  
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
  text-align: center;
}

.boton {
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 150%;
  font-family: "Courier New", Courier, monospace;
}

.text-area {
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: "Courier New", Courier, monospace;
}

.img {
  margin: 5% auto;
  width: 90%;
  max-width: 400px;
  alt: centered
}
</style>
