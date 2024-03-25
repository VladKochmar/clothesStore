<template>
  <div class="sort d-inline-flex ga-4">
    sort
    <select v-model="currentSortType" class="select" @change="changeSortType(currentSortType)">
      <option value="auto">auto</option>
      <option value="low">low to high</option>
      <option value="high">high to low</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentSortType = ref('auto')

import { useCatalogStore } from '@/stores/catalog'
const catalogStore = useCatalogStore()
const { changeSortType } = catalogStore
</script>

<style lang="scss" scoped>
.sort {
  color: rgba(0, 0, 0, 0.3);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
}

.select {
  text-transform: uppercase;
  font-weight: 700;
  outline: none;
}
</style>
