<template>
  <main-master-page>
    <div class="catalog pb-8">
      <div class="catalog__container">
        <v-breadcrumbs :items="breadcrumps" />
        <catalog-navigation />
        <div class="py-12">
          <h2 class="title text-center mb-6" v-html="$t('pages.home.trending-products')"></h2>
          <products-tabs :products-list="trendingProducts" />
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import { onMounted, toRefs, computed } from 'vue'

import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import CatalogNavigation from '@/components/CatalogComponents/CatalogNavigation.vue'
import ProductsTabs from '@/components/ProductsTabs.vue'

// Get products list
import { useCatalogStore } from '@/stores/catalog'
const catalogStore = useCatalogStore()
const { loadItemsList } = catalogStore
const { getItemsList } = toRefs(catalogStore)

onMounted(async () => {
  await loadItemsList()
})

// Get trending products list

const trendingProducts = computed(() => getItemsList.value.filter((product) => product.isTrending))

// Breadcrumps settings
const breadcrumps = [
  { title: 'Home', disabled: false, href: '/' },
  { title: 'Catalog', disabled: true }
]
</script>

<style lang="scss" scoped></style>
