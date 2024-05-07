<template>
  <div class="cart-product">
    <div class="cart-product__image pa-3">
      <img :src="order?.imgSrc" :alt="order?.title" />
    </div>
    <div class="flex-1-1">
      <div class="d-flex justify-space-between gc-4 mb-2">
        <router-link
          :to="{ name: 'product', params: { productId: order.productId } }"
          class="cart-title"
        >
          {{ order?.title }}
        </router-link>
        <span class="cart-product__text">{{ totalPrice }}</span>
      </div>
      <div class="d-inline-flex gc-6 mb-4">
        <span class="cart-product__text">{{ $t('pages.cart.size') }} {{ order?.size }}</span>
        <span class="cart-product__text">{{ $t('pages.cart.color') }} {{ order?.color }}</span>
      </div>
      <div class="d-flex align-center justify-space-between gc-4">
        <quantity-component v-model="currentQuantity" :max-quantity="10" />
        <button @click="removeItemFromCart" class="cart-product__text">
          {{ $t('buttons.remove') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, toRefs, watch } from 'vue'

import QuantityComponent from './QuantityComponent.vue'

const props = defineProps({
  order: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update'])

// Getting User Data
import { useAuthStore } from '@/stores/auth'
const { getUser } = toRefs(useAuthStore())

import { useUsersStore } from '@/stores/users'
const { removeItemFromArray } = useUsersStore()

// Price and quantity
import { useOrdersStore } from '@/stores/orders'
const { updateItem, deleteItem } = useOrdersStore()

const currentQuantity = ref(props.order.quantity)
const totalPrice = computed(
  () => (parseFloat(props.order.price) * currentQuantity.value).toFixed(2) + '€'
)

watch(currentQuantity, async () => {
  await updateItem(props.order.id, {
    ...props.order,
    totalPrice: totalPrice.value,
    quantity: currentQuantity.value
  })
  emit('update')
})

// Remove item from cart
function removeItemFromCart() {
  removeItemFromArray(getUser.value.uid, 'cart', props.order.id)
  deleteItem(props.order.id)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.cart-product {
  display: flex;
  align-items: flex-start;
  gap: 0 1.5rem;
  &:not(:last-child) {
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid $suvaGrey;
  }
  // .cart-product__image
  &__image {
    max-width: 6.25rem;
    background-color: $f9;
    img {
      max-width: 100%;
    }
  }
  // .cart-product__text
  &__text {
    color: $suvaGrey;
  }
}
</style>
