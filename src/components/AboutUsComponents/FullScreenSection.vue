<template>
  <section class="fullscreen-section py-14">
    <div class="fullscreen-section__container">
      <h1 class="fullscreen-section__title text-center mb-11">
        {{ $t('pages.about.main-section.title') }}
      </h1>
      <p class="text-center mb-11">{{ $t('pages.about.main-section.text') }}</p>
      <v-btn
        icon="fa-solid fa-chevron-down"
        variant="outlined"
        size="small"
        @click="onScroll"
      ></v-btn>
    </div>
  </section>
  <div ref="scrollDestination"></div>
</template>

<script setup>
import { ref } from 'vue'

// Scroll to the destination
const scrollDestination = ref(null)

function onScroll() {
  scrollDestination.value.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style lang="scss" scoped>
.fullscreen-section {
  min-height: 100vh;
  display: grid;
  align-items: center;
  // .fullscreen-section__container
  &__container {
    display: grid;
    justify-items: center;
  }
  // .fullscreen-section__title
  &__title {
    font-size: 5rem;
    line-height: 133.333333%;
    text-transform: uppercase;
    max-width: 46.875rem;
    @media (width < 767.98px) {
      font-size: 2.5rem;
    }
  }
}
</style>
