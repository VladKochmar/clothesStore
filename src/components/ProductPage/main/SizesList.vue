<template>
  <div class="mb-8">
    <strong class="d-inline-block mb-3">{{ $t('pages.product.size') }}</strong>
    <ul class="d-flex flex-wrap gc-2 gr-3">
      <li v-for="size in sizes" :key="size.id">
        <size-item :size="size.title" :available-sizes="getCurrentItem?.sizes" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

import sizes from '@/data/sizes.json'
import SizeItem from './SizeItem.vue'

import { useCatalogStore } from '@/stores/catalog'
const { getCurrentItem } = toRefs(useCatalogStore())
</script>

<style lang="scss" scoped></style>
