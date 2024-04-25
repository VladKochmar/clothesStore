<template>
  <div class="orders">
    <h1 class="main-title mb-8">{{ $t('pages.cart.cart-title') }}</h1>
    <div class="d-flex justify-space-between mb-4">
      <span>{{ getCurrentUser.cart.length }} {{ $t('pages.cart.items') }}</span>
      <button @click="clearAll">
        {{ $t('buttons.clear') }}
      </button>
    </div>
    <div v-if="getItemsList.length">
      <cart-item
        v-for="order in getItemsList"
        :key="order.id"
        :order="order"
        @update="updateData"
      />
    </div>
    <empty-list v-else />
  </div>
</template>

<script setup>
import { onMounted, toRefs } from 'vue'

import CartItem from '@/components/cart/CartItem.vue'
import EmptyList from '../CatalogComponents/catalog/components/EmptyList.vue'

import { useAuthStore } from '@/stores/auth'
const { getUser } = toRefs(useAuthStore())

import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
const { updateUser } = usersStore
const { getCurrentUser } = toRefs(usersStore)

// Getting orders list
import { useOrdersStore } from '@/stores/orders'
const ordersStore = useOrdersStore()
const { getItemsList } = toRefs(ordersStore)
const { loadDocumentsFromIdsList, deleteItem } = ordersStore

onMounted(async () => {
  await loadDocumentsFromIdsList(getCurrentUser.value?.cart)
})

async function updateData() {
  await loadDocumentsFromIdsList(getCurrentUser.value?.cart)
}

// Clear All
function clearAll() {
  for (const orderId of getCurrentUser.value.cart) {
    deleteItem(orderId)
  }
  updateUser({ id: getUser.value.uid, data: { ...getCurrentUser.value, cart: [] } })
}
</script>

<style lang="scss" scoped>
.orders {
  @media (width > 599.98px) {
    flex: 0 1 700px;
  }
  span,
  button {
    font-size: 0.875rem;
  }
}
</style>
