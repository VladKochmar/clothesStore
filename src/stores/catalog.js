import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { useGeneralStore } from './general'
import { ref, computed } from 'vue'
import { isFilterMatch } from './helpers/isFilterMatch'

export const useCatalogStore = defineStore('catalog', () => {
  const generalStore = useGeneralStore()
  const { generalApiOperation } = generalStore

  const storeTemplate = getStoreTemplate('catalog', generalApiOperation)
  const { getItemsList } = storeTemplate

  const filterData = ref(null)
  const getFilterData = computed(() => filterData.value)

  function setFilter(newFilter) {
    filterData.value = newFilter
  }

  const filteredList = ref(null)
  const getFilteredList = computed(() => filteredList.value)

  function loadFilteredList() {
    filteredList.value = getItemsList.value?.filter((product) =>
      isFilterMatch(product, getFilterData.value)
    )
  }

  const sortType = ref('auto')
  const getSortType = computed(() => sortType.value)

  function changeSortType(newSortType) {
    sortType.value = newSortType
  }

  return {
    ...storeTemplate,
    getFilterData,
    getFilteredList,
    getSortType,
    setFilter,
    loadFilteredList,
    changeSortType
  }
})
