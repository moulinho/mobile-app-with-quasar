<template>
  <q-page class="row items-center justify-center myPage">
    <div class="column col-10 text-center">
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
        <!-- :rules="[(val) => (val && val.length > 0) || 'Please type something']" -->

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
        <!-- :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]" -->

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
          <!--  :to="{ name: 'dashboard' }" -->
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
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
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
        router.push({
          path: "/home",
        });
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.myPage {
  background: url("../assets/Trace.png") 10rem 20rem no-repeat;
}
</style>
