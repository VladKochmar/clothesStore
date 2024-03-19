<template>
  <main-master-page>
    <div class="catalog">
      <div class="catalog__container">
        <v-breadcrumbs :items="breadcrumps" />
        <div class="d-flex align-center flex-column py-4 text-center">
          <h1 class="main-title mb-2">{{ $t(`pages.catalog.${clothingType}.title`) }}</h1>
          <p class="text">{{ $t(`pages.catalog.${clothingType}.text`) }}</p>
        </div>
        <catalog-filter />
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import { onMounted } from 'vue'

import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import CatalogFilter from '@/components/CatalogComponents/filter/CatalogFilter.vue'

const breadcrumps = [
  { title: 'Home', disabled: false, href: '/' },
  { title: 'Catalog', disabled: false, href: '/' },
  { title: 'Shirts', disabled: true }
]

const props = defineProps({
  clothingType: {
    type: String,
    required: true
  }
})

import { useCatalogStore } from '@/stores/catalog'
const catalogStore = useCatalogStore()

onMounted(async () => {
  await catalogStore.loadFilteredData('type', '==', props.clothingType)
})
</script>

<style lang="scss" scoped>
.text {
  color: #666;
  font-size: 0.875rem;
  max-width: 25rem;
}
</style>
