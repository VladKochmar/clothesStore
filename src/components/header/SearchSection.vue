<template>
  <div>
    <div>
      <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
        <template v-slot:activator="{ props: activatorProps }">
          <button v-bind="activatorProps" class="search-btn">
            <v-icon icon="fa-solid fa-magnifying-glass"></v-icon>
          </button>
        </template>

        <v-card>
          <v-toolbar class="pr-3">
            <v-btn icon="fa-solid fa-xmark" @click="dialog = false"></v-btn>

            <v-text-field
              v-model="searchValue"
              append-inner-icon="fa-solid fa-magnifying-glass"
              density="compact"
              label="Search"
              variant="solo"
              hide-details
              single-line
            ></v-text-field>
          </v-toolbar>

          <div class="px-5 py-12">
            <search-list v-if="sortedItemsList?.length" :products-list="sortedItemsList" />
            <div class="d-flex justify-center text-center text-h6" v-else>Nothing found</div>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, toRefs } from 'vue'

import SearchList from './SearchList.vue'

const dialog = ref(false)

import { useCatalogStore } from '@/stores/catalog'
const catalogStore = useCatalogStore()
const { loadItemsList } = catalogStore
const { getItemsList } = toRefs(catalogStore)

onMounted(() => {
  if (!getItemsList.value.length) loadItemsList()
})

const searchValue = ref(null)
const sortedItemsList = computed(() =>
  getItemsList.value.filter((product) =>
    searchValue.value ? product.title.toLowerCase().includes(searchValue.value.toLowerCase()) : null
  )
)
</script>

<style lang="scss" scoped>
.search-btn {
  padding: 1.75rem 1.875rem;
  @media (width < 1100.98px) {
    padding: 0.8125rem 0.9375rem;
  }
  @media (width < 819.98px) {
    padding: 0.625rem 0.75rem;
  }
  i {
    font-size: 1.25rem;
  }
}
</style>
