<template>
  <header ref="header" class="header">
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

// Header Scroll

const header = ref(null)

let lastScrollTop = 0

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop

  if (header.value) {
    if (scrollTop > lastScrollTop) header.value.classList.add('hidden')
    else header.value.classList.remove('hidden')
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  background-color: #fff;
  transition: transform 0.3s ease 0s;
  &.hidden {
    transform: translate(0, -100%);
  }
}
</style>
