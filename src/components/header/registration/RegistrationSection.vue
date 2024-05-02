<template>
  <aside
    ref="registerSidebar"
    class="register-sidebar d-flex flex-column align-center"
    :class="{ open: model }"
  >
    <v-btn
      variant="text"
      icon="fa-solid fa-xmark"
      class="close-btn align-self-end mb-2"
      @click="onClick"
    ></v-btn>
    <tabs-component />
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import TabsComponent from './components/TabsComponent.vue'

// Sidebar functions
const model = defineModel()

function onClick() {
  model.value = !model.value
}

// 100vh fix
const registerSidebar = ref(null)

let vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01
  registerSidebar.value.style.setProperty('--vh', `${vh}px`)
})
</script>

<style lang="scss" scoped>
.register-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  overflow: auto;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  background-color: #fff;
  padding: 2.5rem;
  transform: translate(100%, 0);
  transition: transform 0.3s ease 0s;
  @media (width > 819.98px) {
    max-width: 570px;
  }
  &.open {
    transform: translate(0, 0);
  }
}
.user-img {
  max-width: 1.5rem;
  border-radius: 50%;
}
</style>
