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
    <tabs-component @close="onClick" />
  </aside>
</template>

<script setup>
// import { ref } from 'vue'
import TabsComponent from './components/TabsComponent.vue'

// Sidebar functions
const model = defineModel()

function onClick() {
  model.value = !model.value
}
</script>

<style lang="scss" scoped>
.register-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  overflow: auto;
  height: 120vh;
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
</style>
