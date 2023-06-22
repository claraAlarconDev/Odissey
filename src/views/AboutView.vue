<template>
  <ion-page>
    <ion-content>
      <h2 class="titulo">¿Qué es Odissey?</h2>
      <ion-scroll direction="xy">
        <img src="img\odissey 4.jpeg" />
        <div class="about-text">
          The story The Odyssey does not follow a linear chronology. The reader
          begins in the middle of the tale, learning about previous events only
          through Odysseus’s retelling. The first four books set the scene in
          Ithaca. Penelope, Odysseus’s wife, and their young son, Telemachus,
          are powerless before her arrogant suitors as they despair of
          Odysseus’s return from the siege of Troy. Telemachus is searching for
          news of his father, who has not been heard from since he left for war
          nearly 20 years earlier. He journeys secretly to the Peloponnese and
          seeks out two men who fought with Odysseus in the war at Troy, Nestor
          and Menelaus, and discovers that his father is indeed still alive. The
          second four books (V–VIII) introduce the main character, Odysseus, as
          he is being released from captivity by the nymph Calypso on the island
          of Ogygia. He suffers a shipwreck and lands on the shore of Scheria,
          the land of the Phaeacians. In Books IX–XII Odysseus tells the
          Phaeacians of the harrowing journey he and his crew endured as they
          tried to find their way home—including their encounters with the
          lotus-eaters, Laestrygonians, and the sorceress Circe, their narrow
          escape from the cave of the Cyclops Polyphemus, their ordeal
          navigating between Scylla and Charybdis, and the final shipwreck in
          which Odysseus is washed ashore on Ogygia alone. Finally, Books
          XIII–XXIV, the second half of the poem, find Odysseus back in Ithaca,
          facing unexpected obstacles and danger. He meets with his
          protector-goddess Athena and reveals himself first to his faithful
          swineherd Eumaeus and then to Telemachus before developing a
          complicated plan to dispose of the suitors. During Odysseus’s absence,
          Penelope resisted the importuning of more than a hundred suitors—who
          have stayed in Odysseus’s house, eating, drinking, and carousing while
          waiting for her to decide among them. In order to reunite with his
          wife, Odysseus kills them all, with the aid of Telemachus, Eumaeus,
          and Philoetius (a servant and cowherd).
        </div>
      </ion-scroll>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonMenuButton,
  IonItem,
  IonLabel,
  IonHeader,
  IonList,
} from "@ionic/vue";
export default {
  components: { IonPage, IonContent,  IonTitle,
  IonToolbar,
  IonMenu,
  IonMenuButton,
  IonItem,
  IonLabel,
  IonHeader,
  IonList,},
};
</script>

<style>
.titulo {
  color: #3880ff;
  font-family: "Courier New", Courier, monospace;
  font-size: 150%;
  margin: 5% auto;
}

.about-text {
  color: black;
  font-family: "Courier New", Courier, monospace;
  font-size: 100%;
  width: 90%;
  margin-left: 5%;
}
</style>


