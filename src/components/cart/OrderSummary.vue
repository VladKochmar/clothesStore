<template>
  <div class="summary">
    <h2 class="main-title mb-8">{{ $t('pages.cart.summary') }}</h2>
    <div class="d-flex justify-space-between mb-3">
      <span>{{ $t('pages.cart.subtotal') }}</span>
      <strong>{{ subtotalPrice.toFixed(2) }}€</strong>
    </div>
    <div class="d-flex justify-space-between pb-6">
      <span>{{ $t('pages.cart.shipping') }}</span>
      <span>{{ shippingAndTaxes.toFixed(2) }}€</span>
    </div>
    <div class="d-flex justify-space-between pb-4">
      <span>{{ $t('pages.cart.total') }}</span>
      <strong>{{ totalPrice.toFixed(2) }}€</strong>
    </div>
    <button :disabled="!getItemsList?.length" class="button button_black w-100">
      {{ $t('buttons.checkout') }}
    </button>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'

import { useOrdersStore } from '@/stores/orders'
const { getItemsList } = toRefs(useOrdersStore())

const subtotalPrice = computed(() =>
  getItemsList.value.reduce(
    (subtotalPrice, currentOrder) => subtotalPrice + parseFloat(currentOrder.totalPrice),
    0
  )
)

const shippingAndTaxes = computed(() => (getItemsList.value.length ? 20 : 0))

const totalPrice = computed(() => subtotalPrice.value + shippingAndTaxes.value)
</script>

<style lang="scss" scoped>
.summary {
  @media (width > 599.98px) {
    flex: 0 1 24.375rem;
  }
  span,
  strong {
    font-size: 0.875rem;
  }
}
</style>
