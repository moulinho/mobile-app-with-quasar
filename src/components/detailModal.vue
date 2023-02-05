<template>


  <q-card-section class="row justify-end q-pa-xs bg-indigo-9">
    <q-btn color="white" icon="close" size="sm" outline round class="" v-close-popup />
  </q-card-section>
  <q-card-section class="q-py-sm">
    <q-img :src="RecipieDetail.recipe.image" class="rounded-borders" height="250px" position="50% 30%">
      <div class="absolute-bottom text-subtitle1 text-left">
        <q-icon name="place" />
        {{ RecipieDetail.recipe.label }}
      </div>
    </q-img>
  </q-card-section>
  <q-card-section class="column items-center ">

    <q-avatar color="primary" class="q-mb-md" text-color="white" icon="restaurant" />

    <div class="text-h5 text-weight-bold q-mb-xs text-center">
      {{ RecipieDetail.recipe.cusineType }}

      {{ RecipieDetail.recipe.label }}
    </div>


    <div class="row items-center">

      <span class="text-body1 ">Ingredients :</span> <q-toggle v-model="visible" class="col" />

    </div>


    <q-slide-transition class="bg-indigo-1 q-pa-md">
      <div v-show="visible">
        <div v-for="ingredient in RecipieDetail.recipe.ingredients" :key="ingredient.id">
          <div class="row">
            <span class="text-weight-bold">- </span>
            <span class="col q-pl-sm"> {{ ingredient.text.split(",").join("\n") }}</span>
          </div>
        </div>
        <q-separator color="indigo-9" spaced inset />
        <div class="row justify-around">
          <div class="column ">
            <span class="">
              {{ RecipieDetail.recipe.totalDaily.ENERC_KCAL.label }} : {{
                RecipieDetail.recipe.totalDaily.ENERC_KCAL.quantity.toFixed(2)
              }}
              {{ RecipieDetail.recipe.totalDaily.ENERC_KCAL.unit }}
            </span>
            <span>
              {{ RecipieDetail.recipe.totalDaily.FIBTG.label }} : {{
                RecipieDetail.recipe.totalDaily.FIBTG.quantity.toFixed(2)
              }}
              {{ RecipieDetail.recipe.totalDaily.FIBTG.unit }}
            </span>
            <span>
              {{ RecipieDetail.recipe.totalDaily.TOCPHA.label }} : {{
                RecipieDetail.recipe.totalDaily.TOCPHA.quantity.toFixed(2)
              }}
              {{ RecipieDetail.recipe.totalDaily.TOCPHA.unit }}
            </span>
            <span>
              {{ RecipieDetail.recipe.totalDaily.VITB6A.label }} : {{
                RecipieDetail.recipe.totalDaily.VITB6A.quantity.toFixed(2)
              }}
              {{ RecipieDetail.recipe.totalDaily.VITB6A.unit }}
            </span>

          </div>
          <div class="column ">
            <span>
              {{ RecipieDetail.recipe.totalDaily.FE.label }} : {{
                RecipieDetail.recipe.totalDaily.FE.quantity.toFixed(2)
              }}
              {{ RecipieDetail.recipe.totalDaily.FE.unit }}
            </span>
            <span>
              {{ RecipieDetail.recipe.totalDaily.PROCNT.label }} : {{
                RecipieDetail.recipe.totalDaily.PROCNT.quantity.toFixed(2)
              }}
              {{ RecipieDetail.recipe.totalDaily.PROCNT.unit }}
            </span>
            <span>
              {{ RecipieDetail.recipe.totalDaily.VITA_RAE.label }} : {{
                RecipieDetail.recipe.totalDaily.VITA_RAE.quantity.toFixed(2)
              }}
              {{ RecipieDetail.recipe.totalDaily.VITA_RAE.unit }}
            </span>
            <span>
              {{ RecipieDetail.recipe.totalDaily.VITB12.label }} : {{
                RecipieDetail.recipe.totalDaily.VITB12.quantity.toFixed(2)
              }}
              {{ RecipieDetail.recipe.totalDaily.VITB12.unit }}
            </span>
          </div>
        </div>


      </div>
    </q-slide-transition>
  </q-card-section>



</template>

<script >
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    RecipieDetail: {
      type: Object
    }
  },
  setup(props) {
    console.log("modal", props.RecipieDetail);

    return {
      visible: ref(false),
    }
  }
})
</script>

<style scoped>

</style>
