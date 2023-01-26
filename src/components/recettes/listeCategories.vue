<template>
  <q-card @click="onClick" class="my-card q-my-md" style="width: 100px">
    <q-img
      src="../../assets/pexels-nataliya-vaitkevich-5792329.jpg"
      class="rounded-borders"
      @click="showListCategorie"
      height="100px"
    >
      <div class="absolute-bottom text-subtitle1 text-center">Caption</div>
    </q-img>
  </q-card>
  <!-- <q-dialog
    full-height
    full-width
    transition-show="slide-left"
    transition-hide="slide-right"
    v-model="show"
  >
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
        <span class="q-ml-sm"
          >You are currently not connected to any network.</span
        >
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog> -->
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

// import detailCategories from "src/components/detailCategories.vue";
export default defineComponent({
  components: {
    // detailCategories,
  },
  setup() {
    const router = useRouter();
    const onClick = () => {
      router.push({
        path: "/DetailCategories",
      });
    };
    return {
      show: ref(false),
      onClick,
    };
  },
});
</script>

<style scoped></style>
