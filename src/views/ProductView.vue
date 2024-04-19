<template>
  <main-master-page>
    <div>
      <main-section />
      <comfortable-section :slides="images" />
      <div class="true-size">
        <div class="true-size__container">
          <view-catalog-banner />
        </div>
      </div>
      <section class="more-to-see">
        <div class="more-to-see__container">
          <h2 class="title mb-6 mb-lg-9">{{ $t('pages.product.more-to-see') }}</h2>
          <products-slider :products-list="getItemsList" />
        </div>
      </section>
      <subscribe-component />
    </div>
  </main-master-page>
</template>

<script setup>
import images from '@/data/images.json'

import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import MainSection from '@/components/ProductPage/main/MainSection.vue'
import ComfortableSection from '@/components/ComfortableSection.vue'
import ProductsSlider from '@/components/ProductsSlider.vue'
import ViewCatalogBanner from '@/components/ProductPage/ViewCatalogBanner.vue'
import SubscribeComponent from '@/components/ProductPage/SubscribeComponent.vue'

// Getting Product Data
const props = defineProps({
  productId: {
    type: String,
    required: true
  }
})

import { onMounted, provide, toRefs } from 'vue'

// Provide a product id to a child component
provide('productId', props.productId)

import { useCatalogStore } from '@/stores/catalog'
const catalogStore = useCatalogStore()
const { loadItemById } = catalogStore
const { getCurrentItem, getItemsList } = toRefs(catalogStore)

import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(async () => {
  if (props.productId) {
    await loadItemById(props.productId)
    if (Object.keys(getCurrentItem.value).length === 0) router.push({ name: 'page-not-found' })
  } else router.push({ name: 'page-not-found' })
})
</script>

<style lang="scss" scoped>
.true-size {
  padding: 7.5rem 0 4rem;
  @media (width < 767.98px) {
    display: none;
  }
}
.more-to-see {
  padding: 4rem 0 7.75rem;
  @media (width < 767.98px) {
    padding: 1rem 0 2.25rem;
  }
}
</style>
