<template>
  <div>
    <q-card flat class="my-card no-border-radius">
      <q-img src="../../assets/pexels-maria-orlova-4969892.jpg" height="200px" position="0% 70%" />

      <q-card-section>
        <q-btn fab color="primary" icon="place" class="absolute" @click="myMap = !myMap"
          style="top: 0; right: 12px; transform: translateY(-50%)" />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Cafe Basilico</div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">$・Italian, Cafe</div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>
      <q-separator />
      <liste-detail-categories />
      <q-separator />
      <liste-detail-categories />
      <q-separator />
      <liste-detail-categories />
      <q-separator />
    </q-card>
  </div>
  <q-dialog v-model="myMap" full-width transition-show="slide-left" transition-hide="slide-right">
    <q-card>
      <q-card-section class="row justify-end q-pa-xs bg-indigo-9">
        <q-btn color="white" icon="close" size="sm" outline round class="" v-close-popup />
      </q-card-section>
      <q-card-section class="q-py-sm">
        <q-img src="../../assets/pexels-nataliya-vaitkevich-5792329.jpg" class="rounded-borders" height="200px"
          position="50% 0%">
          <div class="absolute-bottom text-subtitle1 text-left">
            <q-icon name="place" />
            Caption
          </div>
        </q-img>
      </q-card-section>
      <q-card-section horizontal class="row items-center justify-around">
        <q-card-section class="col-8">
          <q-card-section class="q-py-none">
            <q-avatar color="primary" text-color="white" icon="restaurant" />
          </q-card-section>
          <q-card-section class="q-py-none">
            <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
        </q-card-section>
        <q-card-section class="col-4">
          <q-img src="../../assets/pexels-maria-orlova-4969892.jpg" spinner-color="primary" spinner-size="82px"
            fit="cover" width="100%" height="90px" class="rounded-borders" position="0% 80%" />
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from 'vue-router';
import listeDetailCategories from "src/components/recettes/listeDetailCategories.vue";

export default defineComponent({
  components: {
    listeDetailCategories,
  },
  setup() {
    const router = useRoute();
    // console.log(route);
    onMounted(() => {
      console.log(router);
    })
    return {
      myMap: ref(false),
    };
  },
});
</script>

<style scoped></style>
