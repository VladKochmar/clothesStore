<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import MainSectionSlider from '@/components/MainSectionSlider.vue'
import ProductsTabs from '@/components/ProductsTabs.vue'
import ImagesSection from '@/components/ImagesSection.vue'
import ProductsSlider from '@/components/ProductsSlider.vue'
import BenefitsSection from '@/components/BenefitsSection.vue'
import ComfortableSection from '@/components/ComfortableSection.vue'
import GoodAtYouSection from '@/components/GoodAtYouSection.vue'

import { onMounted, computed } from 'vue'

import { useCatalogStore } from '@/stores/catalog'
const catalogStore = useCatalogStore()

const trendingProducts = computed(() =>
  catalogStore.getItemsList.filter((product) => product.isTrending)
)

onMounted(() => {
  catalogStore.loadItemsList()
})

import images from '@/data/images.json'
import good from '@/data/good.json'
</script>

<template>
  <main-master-page>
    <div class="home">
      <main-section-slider />
      <section class="trending-products">
        <div class="trending-products__container">
          <h2 class="title text-center mb-6" v-html="$t('pages.home.trending-products')"></h2>
          <products-tabs :products-list="trendingProducts" />
        </div>
      </section>
      <images-section />
      <section class="our-products">
        <div class="our-products__container">
          <h2 class="title mb-6 mb-lg-9">{{ $t('pages.home.our-products') }}</h2>
          <products-slider :products-list="catalogStore.getItemsList" />
        </div>
      </section>
      <v-parallax
        src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        class="cant-find"
      >
        <div class="d-flex flex-column fill-height justify-center align-center">
          <h2
            class="title text-white text-center mb-7 mb-md-11"
            v-html="$t('pages.home.cant-find')"
          ></h2>
          <router-link :to="{ name: 'home' }" class="button">{{ $t('buttons.cart') }}</router-link>
        </div>
      </v-parallax>
      <benefits-section />
      <comfortable-section :slides="images" />
      <good-at-you-section :slides="good" />
    </div>
  </main-master-page>
</template>

<style lang="scss">
.trending-products {
  padding: 2.5rem 0 5.625rem;
  .title {
    max-width: 26.5625rem;
    margin: 0 auto;
  }
  @media (width <= 1024px) {
    padding: 1rem 0 2.5rem;
  }
}
.our-products {
  padding: 6.875rem 0 9.375rem;
  @media (width <= 1024px) {
    padding: 50px 0;
  }
}
</style>
