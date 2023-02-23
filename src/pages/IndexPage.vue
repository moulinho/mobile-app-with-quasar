<template>
  <q-page class="row items-center justify-center myPage">
    <!-- <div class="column col-10 text-center">
      <q-img
        src="../assets/Trace.png"
        spinner-color="primary"
        class="absolute-top-left rotate-225"
        width="40%"
        style="margin-top: -4.5rem"
      />
      <div class="text-h3 text-italic absolute-top" style="margin-top: 13rem">
        voxSando
      </div>
      <br /><br />
      <q-form @submit="onSubmit" @reset="onReset" class="col-10 q-gutter-md">
        <q-input
          rounded
          outlined
          dense
          v-model="name"
          label="Your name *"
          lazy-rules
          color="indigo-10"
          label-color="indigo-10"
        />
      :rules="[(val) => (val && val.length > 0) || 'Please type something']" 

        <q-input
          rounded
          outlined
          dense
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          class="q-my-lg"
          color="indigo-10"
          label-color="indigo-10"
        />
        :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]" 

        <div class="column q-my-lg">
          <q-btn
            rounded
            outlined
            unelevated=""
            dense
            label="Connexion"
            type="submit"
            color="indigo-9"
            class="text-bold"
          />
           :to="{ name: 'dashboard' }" 
          <q-btn
            rounded
            outline
            dense
            label="Reset"
            type="reset"
            color="indigo-10"
            class="q-my-lg"
          />
        </div>
      </q-form>
    </div> -->

    <div>
      <!-- Option 1 -->
      <div>Direct store</div>
      <!-- Read the state value directly -->
      <div>{{ store.counter }}</div>
      <!-- Use getter directly -->
      <div>{{ store.doubleCount }}</div>

      <!-- Manipulate state directly -->
      <q-btn @click="store.counter--">-</q-btn>
      <!-- Use an action -->
      <q-btn @click="store.increment()">+</q-btn>
    </div>

    <div>
      <!-- Option 2 -->
      <div>Indirect store</div>
      <!-- Use the computed state -->
      <div>{{ count }}</div>
      <!-- Use the computed getter -->
      <div>{{ doubleCountValue }}</div>

      <!-- Use the exposed function -->
      <q-btn @click="decrementCount()">-</q-btn>
      <!-- Use the exposed function -->
      <q-btn @click="incrementCount()">+</q-btn>
    </div>

    <div>
      <!-- Option 3 -->
      <div>Destructured store</div>
      <!-- Use the destructured state -->
      <div>{{ counter }}</div>
      <!-- Use the destructured getter -->
      <div>{{ doubleCount }}</div>

      <!-- Manipulate state directly-->
      <q-btn @click="counter--">-</q-btn>
      <!-- Use an action -->
      <q-btn @click="increment()">+</q-btn>
    </div>
  </q-page>
</template>

<script>
// import { useQuasar } from "quasar";
// import { ref } from "vue";
// import { useRouter } from "vue-router";

// export default {
//   setup() {
//     const $q = useQuasar();
//     const router = useRouter();
//     const name = ref(null);
//     const age = ref(null);
//     const accept = ref(false);

// return {
// name,
// age,
// accept,

// onSubmit() {
// if (accept.value !== true) {
//   $q.notify({
//     color: "red-5",
//     textColor: "white",
//     icon: "warning",
//     message: "You need to accept the license and terms first",
//   });
// } else {
//   $q.notify({
//     color: "green-4",
//     textColor: "white",
//     icon: "cloud_done",
//     message: "Submitted",
//   });
// }
/* Redirect ici ou voir aussi sur le bouton submit */
//   router.push({
//     path: "/home",
//   });
// },

//       onReset() {
//         name.value = null;
//         age.value = null;
//         accept.value = false;
//       },
//     };
//   },
// };

import { computed } from 'vue';
import { useCounterStore } from 'stores/Recipies';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const store = useCounterStore();

    // Option 2: use computed and functions to use the store
    const count = computed(() => store.counter);
    const doubleCountValue = computed(() => store.doubleCount);
    const incrementCount = () => store.increment(); // use action
    const decrementCount = () => store.counter--; // manipulate directly

    // Option 3: use destructuring to use the store in the template
    const { counter, doubleCount } = storeToRefs(store); // state and getters need "storeToRefs"
    const { increment } = store; // actions can be destructured directly

    return {
      // Option 1: return the store directly and couple it in the template
      store,

      // Option 2: use the store in functions and compute the state to use in the template
      count,
      doubleCountValue,
      incrementCount,
      decrementCount,

      // Option 3: pass the destructed state, getters and actions to the template
      counter,
      increment,
      doubleCount,
    };
  },
};
</script>
<style lang="scss" scoped>
.myPage {
  background: url("../assets/Trace.png") 10rem 20rem no-repeat;
}
</style>
