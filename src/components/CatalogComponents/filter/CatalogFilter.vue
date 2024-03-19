<template>
  <div>
    <div class="d-flex align-center justify-space-between ga-8 py-7 border-bottom">
      <div class="d-inline-flex align-center ga-8">
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
      <sort-select :sort-type="filterData.sortType" @update="updateFilter('sortType', $event)" />
    </div>
    <div class="d-flex align-center justify-space-between ga-8 py-4">
      <div class="d-inline-flex align-center ga-2">
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

import { reactive, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const filterData = reactive({
  color: route.query.color,
  size: route.query.size,
  price: route.query.price,
  sortType: route.query.sort || 'auto'
})

watch(
  filterData,
  () => {
    router.push({
      name: 'catalog',
      params: { clothingType: route.params.clothingType },
      query: {
        color: filterData.color,
        size: filterData.size,
        price: filterData.price,
        sortType: filterData.sortType
      }
    })
  },
  { deep: true }
)

import colors from '@/data/colors.json'
import sizes from '@/data/sizes.json'

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
}
</style>
