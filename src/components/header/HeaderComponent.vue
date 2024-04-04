<template>
  <header class="header">
    <header-top v-if="!isMobile" />
    <div v-else class="header-top top-block text-center py-2 px-5">{{ $t('header.shipping') }}</div>
    <header-bottom v-if="!isMobile" />
    <mobile-header-bottom v-else />
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import HeaderTop from './HeaderTop.vue'
import HeaderBottom from './HeaderBottom.vue'
import MobileHeaderBottom from './MobileHeaderBottom.vue'

const isMobile = ref(false)

onMounted(() => {
  if (window.innerWidth < 820) {
    isMobile.value = true
  }
})
</script>

<style lang="scss" scoped></style>
