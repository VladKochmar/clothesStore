<template>
  <div class="product-card">
    <div class="product-card__header mb-2 mb-lg-6">
      <router-link :to="{ name: 'home' }" class="product-card__img">
        <img :src="productData.imgSrc" :alt="productData.title" />
      </router-link>
      <v-btn
        icon="far fa-heart"
        color="pinkSwan"
        variant="outlined"
        size="small"
        class="product-card__btn"
      ></v-btn>
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
import { computed } from 'vue'

const props = defineProps({
  productData: {
    type: Object,
    required: true
  }
})

const hasDiscount = computed(() => props.productData.discount)
const hasLabel = computed(() => props.productData.label)
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
      object-fit: cover;
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
