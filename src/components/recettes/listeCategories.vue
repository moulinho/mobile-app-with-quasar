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
    <div class="row" style="width: 300px; max-width: 100%">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn round dense flat icon="menu" class="q-mr-xs" />
        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </q-toolbar>
    </div>
  </div>
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
      show: ref(false),
      onClick,
      dataRecipie
    };
  },
});
</script>

<style scoped>
.q-img__content>div {
  padding: 0;
}
</style>
