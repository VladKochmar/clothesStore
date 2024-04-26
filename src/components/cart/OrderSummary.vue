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
    <button
      @click="addOrderToHistory"
      :disabled="!getItemsList?.length"
      class="button button_black w-100"
    >
      {{ $t('buttons.checkout') }}
    </button>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'

import { useOrdersStore } from '@/stores/orders'
const ordersStore = useOrdersStore()
const { getItemsList } = toRefs(ordersStore)
const { deleteItem } = ordersStore

const subtotalPrice = computed(() =>
  getItemsList.value.reduce(
    (subtotalPrice, currentOrder) => subtotalPrice + parseFloat(currentOrder.totalPrice),
    0
  )
)

const shippingAndTaxes = computed(() => (getItemsList.value.length ? 20 : 0))

const totalPrice = computed(() => subtotalPrice.value + shippingAndTaxes.value)

// Add order to the user's history
import { v4 as uuidv4 } from 'uuid'

import { useAuthStore } from '@/stores/auth'
const { getUser } = useAuthStore()

import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
const { getCurrentUser } = toRefs(usersStore)
const { addItemToArray, updateUser } = usersStore

async function addOrderToHistory() {
  const historyData = {
    subtotal: subtotalPrice.value,
    shipping: shippingAndTaxes.value,
    total: totalPrice.value,
    number: uuidv4().slice(0, 8),
    date: new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }),
    orders: getItemsList.value
  }

  await addItemToArray(getUser.uid, 'history', historyData)
  for (const id of getCurrentUser.value.cart) {
    console.log(id)
    await deleteItem(id)
  }
  await updateUser({ id: getUser.uid, data: { ...getCurrentUser.value, cart: [] } })
}
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
