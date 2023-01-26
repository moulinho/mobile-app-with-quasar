<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="route.name !== undefined" class="bg-indigo-9">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title> {{ route.name }} </q-toolbar-title>
        <user-prifile />
      </q-toolbar>
    </q-header>

    <q-footer
      v-if="route.name !== undefined"
      class="items-center"
      :style="
        myMenu
          ? 'border-radius: 6rem 6rem 0 0; transition: 0.5s; background:#283593'
          : 'background:transparent; transition: 0.5s'
      "
    >
      <q-btn
        color="white"
        flat
        round=""
        icon="arrow_back"
        class="absolute-bottom-left q-ml-md q-mb-md bg-indigo-9"
        to="/home"
      />

      <div class="row justify-center q-my-sm bg-transparent">
        <q-fab
          color="traparent"
          text-color="black"
          icon="keyboard_arrow_left"
          direction="left"
          unelevated
          v-model="myMenu"
        >
          <q-fab-action color="amber" text-color="black" icon="mail" />
          <q-fab-action color="amber" text-color="black" icon="food_bank" />
        </q-fab>

        <q-fab
          color="white"
          icon="menu"
          outline
          text-color="indigo-9"
          direction="right"
          class="absolute bg-white"
          unelevated
          v-model="myMenu"
          @click="onClick"
        >
          <q-fab-action
            color="indigo-9"
            outline
            class="bg-white"
            icon="local_bar"
          />
          <q-fab-action
            color="indigo-9"
            outline
            class="bg-white"
            icon="restaurant"
          />
        </q-fab>
      </div>
    </q-footer>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="200"
      :breakpoint="500"
    >
      <q-list>
        <q-item
          v-for="link in essentialLinks"
          :key="link.title"
          clickable
          :active="linked === link.link"
          active-class="my-menu-link"
          class="effet-menu-link"
          @click="linked = link.link"
        >
          {{ typeof link.children }}
          :style="linked == link.link ? 'absolute' : ''"
          <EssentialLink v-bind="link" />
        </q-item>
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import userPrifile from "src/components/userProfile/userPrifile.vue";
import { useRoute } from "vue-router";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    userPrifile,
    // EssentialLink,
  },

  setup() {
    const route = useRoute();
    const leftDrawerOpen = ref(false);
    const miniState = ref(true);
    let linked = ref("dashboard");
    let myMenu = ref();
    watch(
      route,
      () => route.name,
      () => {
        console.debug(`azazaz ${route.name}`);
      }
    );

    return {
      route,
      myMenu,
      linked,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      drawer: ref(false),
      miniState,

      drawerClick(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false;

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation();
        }
      },
      onClick(e) {
        // console.log("zeze", e);
        console.log("myMenu", myMenu.value);
      },
    };
  },
});
</script>
<style lang="sass" scoped>
.mini-slot
  transition: background-color .28s
  &:hover
    background-color: rgba(0, 0, 0, .04)

.mini-icon
  font-size: 1.718em
  padding: 2px 16px

  & + &
    margin-top: 18px



.my-menu-link
    color: #283593
    background: #001fff2d
    font-weight: bold
.effet-menu-link:hover
    color: #283593
    background: #001fff2d
    font-weight: bold
    transform: translateY(6px)
    transition: 0.5s
</style>
