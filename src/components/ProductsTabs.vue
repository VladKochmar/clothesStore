<template>
  <div class="tabs">
    <nav class="tabs__navigation mb-5 mb-lg-12">
      <button
        v-for="tab in tabsNavigation"
        :key="tab.id"
        class="tabs__title"
        :class="{ '_tab-active': activeTab === tab.id }"
        @click="changeTab(tab.id)"
      >
        {{ tab.title.en }}
      </button>
    </nav>
    <div class="tabs__content">
      <products-slider :products-list="filteredProducts" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductsSlider from '@/components/ProductsSlider.vue'

const props = defineProps({
  productsList: {
    type: Array,
    required: true
  }
})

const tabsNavigation = [
  { id: 1, title: { en: 'Shirts', uk: 'Сорочки' } },
  { id: 2, title: { en: 'T-shirts', uk: 'Футболки' } },
  { id: 3, title: { en: 'Sweatshirts', uk: 'Світшоти' } }
]

const activeTab = ref(1)

const filteredProducts = computed(() => {
  const selectedTab = tabsNavigation.find((tab) => tab.id === activeTab.value)
  return props.productsList.filter(
    (product) => product.type.toLowerCase() === selectedTab?.title.en.toLowerCase()
  )
})

function changeTab(tabId) {
  activeTab.value = tabId
}
</script>

<style lang="scss" scoped>
.tabs {
  // .tabs__navigation
  &__navigation {
    display: flex;
    justify-content: center;
    gap: 0 2.125rem;
  }
  // .tabs__title
  &__title {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.6;
    letter-spacing: 0.125rem;
    position: relative;
    padding-bottom: 0.375rem;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 1.5px;
      background-color: #000;
      transition: width 0.3s ease 0s;
    }
    &._tab-active {
      &::before {
        width: 100%;
      }
    }
  }
  // .tabs__content
  &__content {
  }
}
</style>
