<template>
  <div>
    <h1 class="title mb-3">{{ getCurrentItem?.title }}</h1>
    <div class="d-inline-flex gc-2 font-weight-bold mb-8">
      <span v-if="hasDiscount">{{ getCurrentItem?.discount }}</span>
      <span :class="{ 'old-price': hasDiscount }">{{ getCurrentItem?.price }}</span>
    </div>
    <payment-images />
    <sizes-list />
    <div class="d-flex gc-3 mb-3">
      <button class="button button_black w-100">{{ $t('buttons.cart') }} {{ currentPrice }}</button>
      <button class="heart-button"><v-icon icon="far fa-heart" /></button>
    </div>
    <p class="delivery mb-8">{{ $t('pages.product.delivery') }}</p>
    <div v-if="getCurrentItem?.description">
      <accordion-item
        v-for="(article, index) in getCurrentItem?.description"
        :key="index"
        :accordion-data="article"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'

import PaymentImages from './PaymentImages.vue'
import SizesList from './SizesList.vue'
import AccordionItem from './AccordionItem.vue'

// Getting product data
import { useCatalogStore } from '@/stores/catalog'
const { getCurrentItem } = toRefs(useCatalogStore())

// Check if the product has a discount
const hasDiscount = computed(() => (getCurrentItem.value?.discount ? true : false))

// Current product price
const currentPrice = computed(() =>
  hasDiscount.value ? getCurrentItem.value?.discount : getCurrentItem.value?.price
)
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.old-price {
  color: $dimGray;
  text-decoration: line-through;
}

.heart-button {
  font-size: 0.8281rem;
  padding: 1.125rem;
}

.delivery {
  color: $dimGray;
  font-size: 0.75rem;
}
</style>
