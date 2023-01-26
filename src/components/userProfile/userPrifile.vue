<template>
  <q-avatar
    size="lg"
    font-size="52px"
    color="white"
    text-color="teal"
    icon="person"
    class=""
  >
    <q-menu
      transition-show="jump-down"
      transition-hide="jump-up"
      class="no-shadow"
    >
      <q-list style="min-width: 100px">
        <q-item clickable v-close-popup>
          <!-- <q-item-section avatar>
            <q-avatar color="" icon="person" />
          </q-item-section>
          <q-item-section>Profile</q-item-section> -->
          <q-item-section>Connexion</q-item-section>
        </q-item>
        <!-- <q-separator /> -->
        <q-item clickable v-close-popup>
          <!-- <q-item-section avatar>
            <q-avatar icon="logout" class="flip-horizontal" />
          </q-item-section>
          <q-item-section>Logout</q-item-section> -->
          <q-item-section>Inscription</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-avatar>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
