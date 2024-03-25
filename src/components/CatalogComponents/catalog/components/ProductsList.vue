<template>
  <div class="d-flex flex-wrap gr-14 mx-sm-n3 mx-0">
    <div v-for="product in products" :key="product.id" class="item-flex px-sm-3 px-0">
      <product-card :product-data="product" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.item-flex {
  flex: 0 1 33.333%;
  @media (width < 768.98px) {
    flex: 0 1 50%;
  }
  @media (width < 600.98px) {
    flex: 1 1 100%;
  }
}
</style>
