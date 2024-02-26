<script setup>
import ProductsSlider from '@/components/ProductsSlider.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { onMounted } from 'vue'

import { useCatalogStore } from '@/stores/catalog'
const catalogStore = useCatalogStore()

onMounted(() => {
  catalogStore.loadItemsList()
})
</script>

<template>
  <main-master-page>
    <div class="p">
      <div class="p__container">
        <products-slider :products-list="catalogStore.getItemsList" />
      </div>
    </div>
  </main-master-page>
</template>
