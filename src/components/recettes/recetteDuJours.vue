<template>
  <div class="column q-my-md items-center">
    <span class="text-h5">Recettes du jours</span>
    <q-separator spaced inset size="5px" class="rounded-borders q-ma-none" style="width: 25%" />
  </div>

  <div class="text-center text-h6 text-indigo-10 q-my-md" @click="showListCategorie"
    style="text-decoration: underline;">Voir Plus</div>
  <div class="row no-wrap q-gutter-lg justify-center">
    <div class="text-center" v-for="item in dataRecipie" :key="item.id" @click="showDetail(item)" style="width: 150px">
      <q-img :src="item.recipe.image" class="rounded-borders" height="150px">
        <div class="absolute-bottom text-subtitle1 text-center">{{ item.recipe.label }}</div>
      </q-img>
      <div class="text-indigo-10">Voir details</div>
      <q-dialog v-model="show" persistent full-width transition-show="slide-left" transition-hide="slide-right">
        <q-card>
          <detail-modal :RecipieDetail="detailRecipie" />
        </q-card>
      </q-dialog>
    </div>
  </div>

</template>

<script>
import { useQuasar } from "quasar";
import { api } from "src/boot/axios";
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import detailModal from '../detailModal.vue'
export default defineComponent({
  // name: 'ComponentName',
  components: {
    detailModal
  },
  setup() {
    const $q = useQuasar();
    let show = ref(false);


    const router = useRouter();
    let dataRecipie = ref([]);
    let detailRecipie = ref()
    onMounted(async () => {
      let res = await api({
        method: "GET",

      });
      if (res.data.hits.length > 10) {
        dataRecipie.value = res.data.hits.slice(0, 2);
        console.log('res1', dataRecipie.value);
      } else {
        dataRecipie.value = res.data.hits;
        console.log('res2', dataRecipie.value);
      }

    })

    let showDetail = (data) => {
      detailRecipie.value = data
      show.value = !show.value

    }



    let showListCategorie = () => {
      router.push({
        path: "/CategoriesRecette",
      });
    };
    return {
      dataRecipie,
      show,
      detailRecipie,
      showDetail,
      showListCategorie,
    };
  },
});
</script>
