<template>
  <div>
    <router-link v-if="getUser" :to="{ name: 'profile' }" id="user">
      <img v-if="getUser.photoURL" :src="getUser.photoURL" class="user-img" />
      <v-icon v-else icon="fa-solid fa-user"></v-icon>
    </router-link>
    <button v-else @click="onClick"><v-icon icon="fa-solid fa-user"></v-icon></button>
    <aside class="register-sidebar d-flex flex-column align-center" :class="{ open: isOpened }">
      <v-btn
        variant="text"
        icon="fa-solid fa-xmark"
        class="close-btn align-self-end mb-2"
        @click="onClick"
      ></v-btn>
      <tabs-component />
    </aside>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'

import TabsComponent from './components/TabsComponent.vue'

// Get auth data
import { useAuthStore } from '@/stores/auth'
const { getUser } = toRefs(useAuthStore())

// Sidebar functions
const isOpened = ref(false)

function onClick() {
  isOpened.value = !isOpened.value
  document.body.classList.toggle('lock')
}
</script>

<style lang="scss" scoped>
.register-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  height: 100%;
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
