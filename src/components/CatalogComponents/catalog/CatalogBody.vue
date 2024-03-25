<template>
  <div class="py-8">
    <products-list v-if="getFilteredList?.length" :products="getFilteredList" />
    <empty-list v-else />
  </div>
</template>

<script setup>
import ProductsList from './components/ProductsList.vue'
import EmptyList from './components/EmptyList.vue'

import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

import { useCatalogStore } from '@/stores/catalog'
const { getFilteredList, getSortType } = storeToRefs(useCatalogStore())

watchEffect(() => {
  if (getSortType.value === 'low')
    getFilteredList.value.sort((a, b) => {
      const priceA = a?.discount || a.price,
        priceB = b?.discount || b.price
      return parseFloat(priceA) - parseFloat(priceB)
    })
  else if (getSortType.value === 'high')
    getFilteredList.value.sort((a, b) => {
      const priceA = a?.discount || a.price,
        priceB = b?.discount || b.price
      return parseFloat(priceB) - parseFloat(priceA)
    })
  else if (getSortType.value === 'auto')
    getFilteredList?.value?.sort((a, b) => (a.title > b.title ? 1 : -1))
})
</script>

<style lang="scss" scoped></style>
