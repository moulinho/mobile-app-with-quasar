<template>
  <div class="q-gutter-sm column items-center">
    <div class="row justify-around q-gutter-sm">
      <q-card v-for="item in dataRecipie" :key="item.id" @click="onClick" class=" text-center" style="width: 350px">
        <q-img :src="item.recipe.image" class="rounded-borders" height="100px">
          <div class="absolute-bottom text-weight-medium text-center ">{{ item.recipe.label }}</div>
        </q-img>
      </q-card>
    </div>
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
    <!-- <div class="row" style="width: 300px; max-width: 100%">
      <q-input dark dense standout v-model="text" autofocus input-class="text-right" class="q-ml-md">
        <template v-slot:append>
          <q-icon v-if="text === ''" name="search" />
          <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
        </template>
      </q-input>
    </div> -->
  </div>

  <q-page-sticky position="bottom-right" :offset="fabPos">
    <q-fab icon="add" direction="left" color="indigo-9" persistent :disable="draggingFab"
      v-touch-pan.prevent.mouse="moveFab">
      <q-fab-action @click="showDetailCategories" :disable="draggingFab">
        <div class="row " style="width: 300px; max-width: 100%">
          <q-toolbar class="bg-primary text-white rounded-borders">
            <q-btn round dense flat icon="menu" class="q-mr-xs" />
            <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md z-top ">
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
          </q-toolbar>
        </div>
      </q-fab-action>
    </q-fab>
  </q-page-sticky>
</template>

<script>
import { api } from "src/boot/axios";
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// import detailCategories from "src/components/detailCategories.vue";
export default defineComponent({
  components: {
    // detailCategories,
  },
  setup() {
    const router = useRouter();
    let dataRecipie = ref();

    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);

    const showDetailCategories = () => {

    }

    const onClick = () => {
      router.push({
        path: "/DetailCategories",
      });
    };

    onMounted(async () => {
      let res = await api({
        method: "GET",

      });
      dataRecipie.value = res.data.hits

      // if (res.data.hits.length > 10) {
      //   PictureSlide.value = res.data.hits.slice(0, 4);
      //   console.log('PictureSlide1', PictureSlide.value);
      // } else {
      //   PictureSlide.value = res.data.hits;
      //   console.log('PictureSlide2', PictureSlide.value);
      // }



    });
    return {
      text: ref(''),
      show: ref(false),
      showDetailCategories,
      onClick,
      dataRecipie,
      hex: ref(),
      fabPos,
      draggingFab,
      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;

        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y,
        ];
      },
    };
  },
});
</script>

<style scoped>
.q-img__content>div {
  padding: 0;
}
</style>
