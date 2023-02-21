<template>
  <q-page padding>
    <!-- content -->

    <liste-categories />


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

    return {


      onClick() {
        // console.log('Clicked on a fab action')
      },


    };
  },
};
</script>
