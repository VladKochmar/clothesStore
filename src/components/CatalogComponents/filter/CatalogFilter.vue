<template>
  <div>
    <div class="d-flex align-center justify-space-between ga-8 py-7 border-bottom">
      <button @click="onMenuClick" class="activator-btn filters-btn" :class="{ active: isOpened }">
        Filters <v-icon icon="fa-solid fa-chevron-down" />
      </button>
      <div class="filters-container" :class="{ active: isOpened }">
        <filter-menu
          label="Color"
          :options="colors"
          :current-option="filterData.color"
          @update="updateFilter('color', $event)"
        />
        <filter-menu
          label="Size"
          :options="sizes"
          :current-option="filterData.size"
          @update="updateFilter('size', $event)"
        />
        <price-filter-menu
          :price-range="filterData.price"
          @update="updateFilter('price', $event)"
        />
      </div>
      <sort-select />
    </div>
    <div class="d-flex align-center justify-space-between ga-3 py-4">
      <div class="d-inline-flex align-center ga-2 flex-wrap">
        <filter-tag
          v-if="filterData.size"
          :label="filterData.size"
          @clear="updateFilter('size', undefined)"
        />
        <filter-tag
          v-if="filterData.price"
          :label="filterData.price"
          @clear="updateFilter('price', undefined)"
        />
        <filter-tag
          v-if="filterData.color"
          style="padding: 0.25rem 0.75rem 0.25rem 0.25rem !important"
          @clear="updateFilter('color', undefined)"
        >
          <span :style="{ backgroundColor: filterData.color }" class="color-block"></span>
        </filter-tag>
      </div>
      <button class="clear-btn" @click="clearAll">Clear all</button>
    </div>
  </div>
</template>

<script setup>
import FilterMenu from './components/FilterMenu.vue'
import PriceFilterMenu from './components/PriceFilterMenu.vue'
import SortSelect from './components/SortSelect.vue'
import FilterTag from './components/FilterTag.vue'

import colors from '@/data/colors.json'
import sizes from '@/data/sizes.json'

import { ref, reactive, watch, onMounted } from 'vue'

// Filters Menu
const isOpened = ref(false)

function onMenuClick() {
  isOpened.value = isOpened.value ? false : true
}

import { useCatalogStore } from '@/stores/catalog'
const catalogStore = useCatalogStore()
const { setFilter, loadFilteredList } = catalogStore

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const filterData = reactive({
  color: route.query.color,
  size: route.query.size,
  price: route.query.price
})

watch(filterData, () => {
  router.push({
    name: 'catalog',
    params: { clothingType: route.params.clothingType },
    query: {
      color: filterData.color,
      size: filterData.size,
      price: filterData.price
    }
  })
  setFilter(filterData)
  loadFilteredList()
})

onMounted(() => {
  setFilter(filterData)
  loadFilteredList()
})

function updateFilter(prop, newValue) {
  filterData[prop] = newValue
}

function clearAll() {
  filterData.color = undefined
  filterData.size = undefined
  filterData.price = undefined

  router.push({ name: 'catalog', params: { clothingType: route.params.clothingType } })
}
</script>

<style lang="scss" scoped>
.filters-btn {
  @media (width > 519.98px) {
    display: none;
  }
}
.filters-container {
  display: inline-flex;
  align-items: center;
  gap: 3rem 2rem;
  @media (width < 519.98px) {
    display: grid;
    align-content: start;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    height: 40%;
    width: 100%;
    background-color: #eaeaeb;
    padding: 2rem 1.75rem;
    transform: translate(0, 100%);
    transition: transform 0.3s ease 0s;
    &.active {
      transform: translate(0, 0);
    }
  }
}
.border-bottom {
  border-bottom: 1.5px solid #e5e5e5;
}
.color-block {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.clear-btn {
  color: rgba(0, 0, 0, 0.3);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  white-space: nowrap;
}
</style>
