<template>
  <div class="product-card">
    <div class="product-card__header mb-2 mb-lg-6">
      <router-link
        :to="{ name: 'product', params: { productId: productData.id } }"
        class="product-card__img"
      >
        <img :src="productData.imgSrc" :alt="productData.title" />
      </router-link>
      <v-btn
        :icon="heartIconName"
        color="pinkSwan"
        variant="outlined"
        size="small"
        class="product-card__btn"
        @click="onClick(productData.id)"
      ></v-btn>
      <v-snackbar v-model="snackbar">
        {{ $t('snackbar.login') }}

        <template v-slot:actions>
          <v-btn color="pink" variant="text" @click="snackbar = false">
            <v-icon icon="fa-solid fa-xmark" />
          </v-btn>
        </template>
      </v-snackbar>
      <div v-if="hasLabel" class="product-card__label">{{ productData.label }}</div>
    </div>
    <div class="product-card__body">
      <router-link :to="{ name: 'home' }" class="product-card__title mb-2">
        {{ productData.title }}
      </router-link>
      <div class="product-card__info d-flex ga-2">
        <span class="product-card__price" :class="{ 'line-through': hasDiscount }">{{
          productData.price
        }}</span>
        <span v-if="hasDiscount" class="product-card__discount">{{ productData.discount }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs, ref } from 'vue'

const props = defineProps({
  productData: {
    type: Object,
    required: true
  }
})

const hasDiscount = computed(() => props.productData.discount)
const hasLabel = computed(() => props.productData.label)

// Getting User Data
import { useAuthStore } from '@/stores/auth'
const { getUser } = toRefs(useAuthStore())

import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
const { addItemToArray, removeItemFromArray } = usersStore
const { getCurrentUser } = toRefs(usersStore)

// Checking if the product is favorite
const isFavorite = computed(() => getCurrentUser.value?.wishlist?.includes(props.productData?.id))
const heartIconName = computed(() => (isFavorite.value ? 'fa-solid fa-heart' : 'far fa-heart'))

// Snackbar
const snackbar = ref(false)

// Select or deselect product
function onClick(productId) {
  if (getUser.value) {
    if (isFavorite.value) removeItemFromArray(getUser.value?.uid, 'wishlist', productId)
    else addItemToArray(getUser.value?.uid, 'wishlist', productId)
  } else {
    snackbar.value = true
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  // max-width: 24.375rem;
  // .product-card__header
  &__header {
    position: relative;
    background-color: #fafaf9;
  }
  // .product-card__img
  &__img {
    display: block;
    position: relative;
    padding-top: 115.384615%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  // .product-card__btn
  &__btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: #fff;
  }
  // .product-card__label
  &__label {
    position: absolute;
    left: 0;
    top: 1.5rem;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 133.333333%;
    padding: 0.75rem 1rem;
    background-color: #fff;
  }
  // .product-card__body
  &__body {
  }
  // .product-card__title
  &__title {
    display: inline-block;
    font-size: 1.375rem;
    line-height: 145.454545%;
    font-family: Inconsolata;
    text-transform: uppercase;
    @media (max-width: 424.98px) {
      font-size: 0.875rem;
    }
  }
  // .product-card__info
  &__info {
    font-weight: 700;
    line-height: 137.5%;
    @media (max-width: 424.98px) {
      font-size: 0.875rem;
    }
  }
  // .product-card__price
  &__price {
    color: #828282;
    &.line-through {
      text-decoration: line-through;
    }
  }
  // .product-card__discount
  &__discount {
    color: #bd3735;
  }
}
</style>
