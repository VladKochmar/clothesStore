<template>
  <swiper
    :breakpoints="{
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    }"
  >
    <swiper-slide v-for="product in productsList" :key="product.id">
      <product-card :product-data="product" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

defineProps({
  productsList: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
.swiper {
  @media (max-width: 767.98px) {
    overflow: visible;
  }
}
</style>
