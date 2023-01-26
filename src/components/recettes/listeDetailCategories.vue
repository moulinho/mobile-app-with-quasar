<template>
  <q-scroll-area class="q-my-md q-px-sm" style="height: 150px; max-width: 100%">
    <div class="row no-wrap q-gutter-lg">
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

      <div class="" v-for="n in 10" :key="n" style="width: 100px">
        <q-img
          src="../../assets/pexels-nataliya-vaitkevich-5792329.jpg"
          class="rounded-borders"
          @click="showed()"
        >
          <!-- @click="show = !show" -->
          <div class="absolute-bottom text-subtitle1 text-center">Caption</div>
        </q-img>
      </div>
    </div>
    <q-dialog v-model="show" seamless position="bottom" class="z-top" style="">
      <q-card style="width: 350px; border-radius: 25px 25px 0px 0px">
        <q-card-section class="row justify-end q-pa-sm bg-indigo-9">
          <q-btn
            color="white"
            icon="close"
            size="sm"
            outline
            round
            class=""
            v-close-popup
          />
        </q-card-section>

        <q-card-section class="row items-center no-wrap q-py-none">
          <q-card-section class="col">
            <div v-for="n in 3" :key="n">
              <div class="text-weight-bold">The Walker</div>
              <div class="text-grey">Fitz & The Tantrums</div>
            </div>
          </q-card-section>

          <q-card-section class="col-4">
            <q-img
              src="../../assets/pexels-nataliya-vaitkevich-5792329.jpg"
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
    </q-dialog>
  </q-scroll-area>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  // name: 'ComponentName',
  setup() {
    const $q = useQuasar();
    let show = ref(false);
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
    function showed(grid) {
      $q.bottomSheet({
        message: "Bottom Sheet message",
        grid,
        actions: [
          {
            label: "Drive",
            img: "https://cdn.quasar.dev/img/logo_drive_128px.png",
            id: "drive",
          },
          {
            label: "Keep",
            img: "https://cdn.quasar.dev/img/logo_keep_128px.png",
            id: "keep",
          },
          {
            label: "Google Hangouts",
            img: "https://cdn.quasar.dev/img/logo_hangouts_128px.png",
            id: "calendar",
          },
          {
            label: "Calendar",
            img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
            id: "calendar",
          },
          {},
          {
            label: "Share",
            icon: "share",
            id: "share",
          },
          {
            label: "Upload",
            icon: "cloud_upload",
            color: "primary",
            id: "upload",
          },
          {},
          {
            label: "John",
            avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
            id: "john",
          },
        ],
      })
        .onOk((action) => {
          // console.log('Action chosen:', action.id)
        })
        .onCancel(() => {
          // console.log('Dismissed')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }
    return {
      info,
      show,
      showed,
      handlePan,
    };
  },
});
</script>
