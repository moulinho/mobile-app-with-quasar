<template>
  <q-carousel v-model="slide" transition-prev="jump-right" transition-next="jump-left" swipeable animated
    control-color="white" navigation :autoplay="2500" arrows padding infinite height="200px"
    class="bg-transparent text-white no-border-radius q-pa-none">
    <q-carousel-slide v-for="(item, index) in PictureSlide" :key="item" :name="index"
      class="column no-wrap flex-center q-pa-none" style="padding: 0px">
      <q-img :src="item.recipe.image" width="100%" />
    </q-carousel-slide>
  </q-carousel>
  <recette-du-jours />
  <coktail-du-jour />
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import recetteDuJours from "src/components/recettes/recetteDuJours.vue";
import coktailDuJour from "src/components/coktails/coktailDuJour.vue";
import { api } from "src/boot/axios";
export default defineComponent({
  components: {
    recetteDuJours,
    coktailDuJour,
  },
  setup() {
    let PictureSlide = ref([])


    onMounted(async () => {
      let res = await api({
        method: "GET",

      });
      if (res.data.hits.length > 10) {
        PictureSlide.value = res.data.hits.slice(0, 4);
        console.log('PictureSlide1', PictureSlide.value);
      } else {
        PictureSlide.value = res.data.hits;
        console.log('PictureSlide2', PictureSlide.value);
      }
    });



    return {
      PictureSlide
      ,
      slide: ref(0),
      tabIg: ref([
        "zaib-tse-KVv5lFOMY1E-unsplash.jpg",
        "jose-luis-jBHv766AKrE-unsplash.jpg",
        "tangerine-newt-a9rxefN9vgY-unsplash.jpg",
        "tangerine-newt-TN09yTRftZ8-unsplash.jpg",
      ]),
    };
  },
});
</script>

<style scoped>

</style>
