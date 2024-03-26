<template>
  <main-master-page>
    <div class="catalog pb-8">
      <div class="catalog__container">
        <v-breadcrumbs :items="breadcrumps" />
        <div class="d-flex align-center flex-column py-4 text-center">
          <h1 class="main-title mb-2">{{ $t(`pages.catalog.${clothingType}.title`) }}</h1>
          <p class="text">{{ $t(`pages.catalog.${clothingType}.text`) }}</p>
        </div>
        <catalog-filter />
        <catalog-body />
        <button @click="onLoadMore" class="button button_black d-flex mx-auto w-100 mw-390">
          {{ $t('buttons.more') }}
        </button>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import { onMounted } from 'vue'

import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import CatalogFilter from '@/components/CatalogComponents/filter/CatalogFilter.vue'
import CatalogBody from '@/components/CatalogComponents/catalog/CatalogBody.vue'

const props = defineProps({
  clothingType: {
    type: String,
    required: true
  }
})

import { useCatalogStore } from '@/stores/catalog'
const catalogStore = useCatalogStore()
const { loadFilteredData, loadFilteredDataAfter, loadFilteredList } = catalogStore

onMounted(async () => {
  await loadFilteredData('type', '==', props.clothingType)
  loadFilteredList()
})

async function onLoadMore() {
  await loadFilteredDataAfter('type', '==', props.clothingType)
  loadFilteredList()
}

// Breadcrumps settings
const breadcrumps = [
  { title: 'Home', disabled: false, href: '/' },
  { title: 'Catalog', disabled: false, href: '/catalog' },
  { title: props.clothingType, disabled: true }
]
</script>

<style lang="scss" scoped>
.text {
  color: #666;
  font-size: 0.875rem;
  max-width: 25rem;
}
.mw-390 {
  max-width: 24.375rem;
}
</style>
