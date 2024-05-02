<template>
  <div>
    <h1 class="title mb-3">{{ getCurrentItem?.title }}</h1>
    <div class="d-inline-flex gc-2 font-weight-bold mb-8">
      <span v-if="hasDiscount">{{ getCurrentItem?.discount }}</span>
      <span :class="{ 'old-price': hasDiscount }">{{ getCurrentItem?.price }}</span>
    </div>
    <payment-images />
    <sizes-list @select="onSelectSize($event)" />
    <div class="d-flex gc-3 mb-3">
      <button
        id="add"
        @click="addToCart"
        :disabled="!currentSize"
        class="button button_black w-100"
      >
        {{ $t('buttons.cart') }} {{ currentPrice }}
      </button>
      <button class="heart-button" @click="onClick(productId)">
        <v-icon :icon="heartIconName" />
      </button>
      <v-snackbar v-model="snackbar">
        {{ $t('snackbar.login') }}

        <template v-slot:actions>
          <v-btn color="pink" variant="text" @click="snackbar = false"> Close </v-btn>
        </template>
      </v-snackbar>
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
import { computed, inject, toRefs, ref, provide } from 'vue'

import PaymentImages from './PaymentImages.vue'
import SizesList from './SizesList.vue'
import AccordionItem from './AccordionItem.vue'

// Getting product data
import { useCatalogStore } from '@/stores/catalog'
const { getCurrentItem } = toRefs(useCatalogStore())

// Ijecting the product id
const productId = inject('productId')

// Check if the product has a discount
const hasDiscount = computed(() => (getCurrentItem.value?.discount ? true : false))

// Current product price
const currentPrice = computed(() =>
  hasDiscount.value ? getCurrentItem.value?.discount : getCurrentItem.value?.price
)

// Getting User Data
import { useAuthStore } from '@/stores/auth'
const { getUser } = toRefs(useAuthStore())

import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
const { addItemToArray, removeItemFromArray } = usersStore
const { getCurrentUser } = toRefs(usersStore)

// Snackbar
const snackbar = ref(false)

// Checking if the product is favorite
const isFavorite = computed(() => getCurrentUser.value?.wishlist?.includes(productId))
const heartIconName = computed(() => (isFavorite.value ? 'fa-solid fa-heart' : 'far fa-heart'))

// Select or deselect product
function onClick(productId) {
  if (getUser.value) {
    if (isFavorite.value) removeItemFromArray(getUser.value?.uid, 'wishlist', productId)
    else addItemToArray(getUser.value?.uid, 'wishlist', productId)
  } else {
    snackbar.value = true
  }
}

// Size
const currentSize = ref(null)
provide('selectedSize', currentSize)

function onSelectSize(selectedSize) {
  currentSize.value = selectedSize
}
// Add to cart
import { v4 as uuidv4 } from 'uuid'

import { useOrdersStore } from '@/stores/orders'
const { addItemWithCustomId } = useOrdersStore()

function addToCart() {
  if (getUser.value) {
    const orderId = uuidv4()

    const orderData = {
      productId: productId,
      title: getCurrentItem.value.title,
      price: currentPrice.value,
      size: currentSize.value,
      color: getCurrentItem.value.color,
      imgSrc: getCurrentItem.value.imgSrc,
      totalPrice: currentPrice.value,
      quantity: 1
    }

    addItemWithCustomId({ id: orderId, data: orderData })
    addItemToArray(getUser.value?.uid, 'cart', orderId)
  } else {
    snackbar.value = true
  }
}
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
