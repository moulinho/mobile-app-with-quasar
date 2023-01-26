<template>
  <q-page
    padding
    class="row justify-around items-center"
    :style="{ backgroundColor: hex }"
  >
    <!-- content -->

    <liste-categories v-for="n in 18" :key="n" />

    <q-page-sticky position="bottom-right" :offset="fabPos">
      <q-fab
        icon="add"
        direction="up"
        color="indigo-9"
        :disable="draggingFab"
        v-touch-pan.prevent.mouse="moveFab"
      >
        <q-fab-action @click="onClick" :disable="draggingFab">
          <q-color v-model="hex" class="my-picker" />
        </q-fab-action>
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from "vue";
import listeCategories from "src/components/recettes/listeCategories.vue";
export default {
  components: {
    listeCategories,
  },
  setup() {
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);

    return {
      hex: ref(),
      fabPos,
      draggingFab,

      onClick() {
        // console.log('Clicked on a fab action')
      },

      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;

        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y,
        ];
      },
    };
  },
};
</script>
