<template>
  <div class="q-gutter-sm column items-center">
    <div class="row justify-around q-gutter-sm">
      <q-card v-for="item in dataRecipie" :key="item.id" @click="onClick(item.recipe)" class=" text-center"
        style="width: 350px">
        <q-img :src="item.recipe.image" class="rounded-borders" height="100px">
          <div class="absolute-bottom text-weight-medium text-center ">{{ item.recipe.label }}</div>
        </q-img>
      </q-card>
    </div>
  </div>

  <q-page-sticky position="bottom-right" :offset="fabPos">
    <!-- <div class="row"> -->


    <transition enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutRight">
      <span v-if="displayed" style=" max-width: 100%" class="">
        <q-input dark dense standout v-model="text" input-class="text-right" class="rounded-borders bg-indigo-9 z-top ">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </span>
    </transition>
    <q-fab class="q-ml-sm" icon="add" direction="left" color="indigo-9" persistent :disable="draggingFab"
      v-touch-pan.prevent.mouse="moveFab" @click="showDetailCategories">

    </q-fab>
    <!-- </div> -->
  </q-page-sticky>
</template>

<script>
import { api } from "src/boot/axios";
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

// import detailCategories from "src/components/detailCategories.vue";
export default defineComponent({
  components: {
    // detailCategories,
  },
  setup() {
    // APP_KEY_1
    const APP_ID_1 = process.env.APP_ID_1;
    const APP_KEY_1 = process.env.APP_KEY_1;
    // console.log('APP_ID_1', process.env.APP_ID_1)
    // console.log('APP_KEY_1', process.env.APP_KEY_1)
    let searchQuery = 'salad'
    const router = useRouter();
    let dataRecipie = ref();
    let dataRecipieFilte = ref()

    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    const displayed = ref(false)
    let text = ref('');

    text.value !== '' ? text.value : text.value = searchQuery;

    // const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${text.value}&app_id=${APP_ID_1}&app_key=${APP_KEY_1}`;

    const showDetailCategories = () => {
      displayed.value = !displayed.value
    }



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


    watchEffect(async () => {
      // console.log('text.value', text.value);
      if (text.value.length > 4) {
        let resSearch = await api({
          url: `https://api.edamam.com/api/recipes/v2?type=public&q=${text.value}&app_id=${APP_ID_1}&app_key=${APP_KEY_1}`,
          method: "GET",

        });
        dataRecipieFilte.value = resSearch.data.hits
      }

      // console.log("resSearch", dataRecipieFilte.value);
      text.value !== '' && text.value.length > 4 ? dataRecipie.value = dataRecipieFilte.value : dataRecipie.value

    })

    const onClick = (item) => {
      console.log('azazaz', item);
      router.push({
        name: "DetailCategories",
        params: {
          calories: item.calories,
          cuisineType: item.cuisineType,
          dietLabels: item.dietLabels
        }

      });
    };


    // console.log("resSearch", dataRecipieFilte.value);


    return {
      dataRecipieFilte,
      text,
      show: ref(false),
      displayed,
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
