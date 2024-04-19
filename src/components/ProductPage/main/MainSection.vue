<template>
  <div class="main-product-section">
    <div class="main-product-section__container">
      <div class="main-product-section__body">
        <product-slider class="main-product-section__slider" />
        <info-block class="main-product-section__info" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductSlider from './ProductSlider.vue'
import InfoBlock from './InfoBlock.vue'
</script>

<style lang="scss" scoped>
.main-product-section {
  // .main-product-section__body
  &__body {
    display: flex;
    gap: 2rem 1.5rem;
    justify-content: space-between;
    @media (width < 767.98px) {
      flex-direction: column;
    }
  }
  // .main-product-section__slider
  &__slider {
    @media (width > 767.98px) {
      flex: 0 1 43.75rem;
    }
    min-width: 0;
  }
  // .main-product-section__info
  &__info {
    @media (width > 767.98px) {
      flex: 0 1 24.375rem;
    }
  }
}
</style>
