<template>
  <main-master-page>
    <div class="wishlist py-15">
      <div class="wishlist__container">
        <h1 class="main-title text-center mb-8">{{ $t('pages.wishlist.title') }}</h1>
        <products-list v-if="wishlist?.length" :products="wishlist" />
        <empty-list v-else />
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import { onMounted, ref, toRefs, watch } from 'vue'

import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import ProductsList from '@/components/CatalogComponents/catalog/components/ProductsList.vue'
import EmptyList from '@/components/CatalogComponents/catalog/components/EmptyList.vue'

// Getting User Data
import { useUsersStore } from '@/stores/users'
const { getCurrentUser } = toRefs(useUsersStore())

// Getting Catalog Data
import { useCatalogStore } from '@/stores/catalog'
const { loadDocumentsFromIdsList } = useCatalogStore()

const wishlist = ref([])

onMounted(async () => {
  if (getCurrentUser.value?.wishlist.length)
    wishlist.value = await loadDocumentsFromIdsList(getCurrentUser.value?.wishlist)
})

watch(getCurrentUser, async () => {
  wishlist.value = await loadDocumentsFromIdsList(getCurrentUser.value?.wishlist)
})
</script>

<style lang="scss" scoped></style>
