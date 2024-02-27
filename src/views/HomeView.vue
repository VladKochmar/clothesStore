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
    <div class="home">
      <section class="our-products">
        <div class="our-products__container">
          <h2 class="title mb-6 mb-lg-9">{{ $t('pages.home.our-products') }}</h2>
          <products-slider :products-list="catalogStore.getItemsList" />
        </div>
      </section>
    </div>
  </main-master-page>
</template>

<style lang="scss" scoped>
.our-products {
  padding: 6.875rem 0 9.375rem;
  @media (width <= 1024px) {
    padding: 50px 0;
  }
}
</style>
