<template>
  <div class="column q-my-md items-center">
    <span class="text-h5">Coktails du jours</span>
    <q-separator
      spaced
      inset
      size="5px"
      class="rounded-borders q-ma-none"
      style="width: 25%"
    />
  </div>
  <div class="row no-wrap q-gutter-lg justify-center">
    <!-- <q-card
        v-for="n in 10"
        :key="n"
        class="my-card col-4"
        flat
        bordered
        style="width: 400px"
      >
        <q-card-section horizontal>
          <q-img class="col" src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-actions vertical class="justify-around q-px-md">
            <q-btn flat round color="red" icon="favorite" />
            <q-btn flat round color="accent" icon="bookmark" />
            <q-btn flat round color="primary" icon="share" />
          </q-card-actions>
        </q-card-section>
      </q-card> -->

    <div class="" v-for="n in 2" :key="n" style="width: 150px">
      <q-img
        src="../../assets/tangerine-newt-TN09yTRftZ8-unsplash.jpg"
        class="rounded-borders"
        @click="showListCategorie"
        height="150px"
      >
        <div class="absolute-bottom text-subtitle1 text-center">Caption</div>
      </q-img>
    </div>
  </div>
  <!-- <q-dialog v-model="show" seamless position="bottom" class="z-top" style="">
    <q-card style="width: 350px; border-radius: 25px 25px 0px 0px">
      <div class="row justify-center">
        <q-separator
          spaced
          inset
          size="10px"
          class="rounded-borders"
          style="width: 50%"
          @click="show = !show"
        />
      </div>

      <q-card-section class="row items-center no-wrap">
        <q-card-section class="col">
          <div v-for="n in 3" :key="n">
            <div class="text-weight-bold">The Walker</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>
        </q-card-section>

        <q-card-section class="col-4">
          <q-img
            src="../../assets/tangerine-newt-TN09yTRftZ8-unsplash.jpg"
            spinner-color="primary"
            spinner-size="82px"
            fit="cover"
            width="100%"
            height="90px"
            class="rounded-borders"
            position="0% 80%"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-dialog> -->
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  // name: 'ComponentName',
  setup() {
    const $q = useQuasar();
    let show = ref(false);
    const router = useRouter();
    const info = ref(null);
    let handlePan = ({ evt, ...newInfo }) => {
      info.value = newInfo;
      info.value.touch = show;
      console.log("info", info.value);
      // native Javascript event
      console.log(evt);
      // if (newInfo.isFirst) {
      //   panning.value = true;
      // } else if (newInfo.isFinal) {
      //   panning.value = false;
      // }
    };
    let showListCategorie = () => {
      router.push({
        path: "/CategoriesCocktail",
      });
    };
    return {
      info,
      show,
      handlePan,
      showListCategorie,
    };
  },
});
</script>
