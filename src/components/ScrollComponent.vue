<template>
 
    <ion-infinite-scroll>
      <ion-infinite-scroll-content
        loading-text="Por favor espere..."
        loading-spinner="bubbles"
      ></ion-infinite-scroll-content>
    </ion-infinite-scroll>

</template>

<script>
import { defineComponent } from "vue";
import {IonInfiniteScroll,
        IonInfiniteScrollContent,
        IonContent} from '@ionic/vue';
export default {
     components:{
        IonInfiniteScroll,
        IonInfiniteScrollContent,
        IonContent
     },
     data(){
        return{}
     }
}
</script>

<style>

</style>