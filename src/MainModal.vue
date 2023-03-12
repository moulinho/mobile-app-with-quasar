<template>
  <q-dialog class="dialog" :position="position" persistent transition-show="slide-up" transition-hide="slide-down"
    style="border-radius: 10px">
    <q-card class="modal" :style="drawerStyle()" :class="{ hide: isActive }">
      <div clickable class="q-ma-md text-center" v-touch-pan.mouse="slideDrawer"
        style="margin-left:80px; margin-right:80px;">
        <q-separator size="5px" color="grey-8" style="border-radius: 15px" inset @click="close" />
      </div>
      <div class="q-pa-xs q-my-none">
        <div>
          <slot></slot>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>


<script>
import { ref, provide, inject } from "vue"
import { useQuasar } from 'quasar'
import $ from 'jquery'


export default {

  props: {
    position: {
      type: String,
      default: "bottom"
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },

  setup(props, { emit }) {
    const $q = useQuasar()
    let top = 0

    let drawerPos = ref(10)
    let modalIsClosed = inject("modalIsClosed")

    const close = () => {
      emit("modalIsClosed")
    }



    const drawerStyle = () => {
      return {
        bottom: `${drawerPos.value}px`
      }
    }


    const slideDrawer = (ev) => {
      const { height } = $q.screen
      if (top == 0) {
        top = drawerPos.value
      }
      let taille = $(ev.evt.path[2]).height()
      drawerPos.value = drawerPos.value - ev.delta.y

      if (ev.isFinal === true) {
        if (drawerPos.value > top + 20) {
          animateDrawerTo(top)
        }
        else if (drawerPos.value < -taille / 3) {
          drawerPos.value = top
          close()
        }
        else {
          animateDrawerTo(top)
        }
      }
    }

    const animateDrawerTo = (height) => {
      const diff = height - drawerPos.value

      if (diff !== 0) {
        drawerPos.value += Math.abs(diff) < 2 ? diff : Math.round(diff / 2)
        setTimeout(() => {
          animateDrawerTo(height)
        }, 30)
      }
    }


    return {
      close,
      modalIsClosed,
      slideDrawer,
      drawerStyle
    }
  }
}
</script>


<style scoped>
.top {
  border-radius: 10px;
  min-height: 20vw;
  position: absolute;
  top: 2vh;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);
}

.modal {
  margin: 3% 3% 10vh 3%;
  border-radius: 10px;
  min-height: 20vw;
  position: relative;
  bottom: -10%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);
}

.q-dialog__inner>div {
  border-radius: 20px !important;
}
</style>
