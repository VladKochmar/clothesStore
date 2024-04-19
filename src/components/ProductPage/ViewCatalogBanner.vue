<template>
  <div class="banner d-flex align-center justify-space-between gc-5">
    <div>
      <img
        src="https://condomshop.pk/cdn/shop/products/plain-blue-tshirt_grande.jpg?v=1449214640"
        class="banner__image"
      />
    </div>
    <h2 class="banner__title title-s">{{ $t('pages.product.banner') }}</h2>
    <router-link :to="{ name: 'catalog' }" class="button button_black no-wrap-text">
      {{ $t('buttons.visit') }}
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.banner {
  padding: 3.25rem 7rem;
  border: 1px solid $suvaGrey;
  @media (width < 1019.98px) {
    padding: 3.25rem 2.5rem;
  }
  // .banner__image
  &__image {
    max-width: 9.6875rem;
  }
  // .banner__title
  &__title {
    max-width: 26.25rem;
  }
}
</style>
