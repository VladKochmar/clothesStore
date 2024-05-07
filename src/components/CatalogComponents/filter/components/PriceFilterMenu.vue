<template>
  <v-menu v-model="priceMenu" :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <span v-bind="props" class="activator-btn">
        {{ $t('pages.catalog.price') }} <v-icon icon="fa-solid fa-chevron-down" />
      </span>
    </template>

    <v-card max-width="400" class="py-7 px-8">
      <strong class="text-body-2 font-weight-bold d-block mb-3"
        >{{ $t('pages.catalog.price') }} (€)</strong
      >
      <div class="d-flex align-center ga-3">
        <v-text-field
          id="min"
          v-model="minPrice"
          :label="$t('pages.catalog.from')"
          variant="outlined"
          class="input"
        ></v-text-field>
        <v-text-field
          id="max"
          v-model="maxPrice"
          :label="$t('pages.catalog.to')"
          variant="outlined"
          class="input"
        ></v-text-field>
      </div>
      <button id="save" class="button button_black w-100" @click="applyFilter">
        {{ $t('pages.catalog.save') }}
      </button>
    </v-card>
  </v-menu>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  priceRange: {
    type: String,
    default: ''
  }
})

const splitedPriceRange = props.priceRange.split('-')

const priceMenu = ref(false)

const minPrice = ref(splitedPriceRange[0])
const maxPrice = ref(splitedPriceRange[1])

const emit = defineEmits(['update'])

function applyFilter() {
  const priceFilter = `${minPrice.value || '1'}-${maxPrice.value || parseInt(minPrice.value) + 1}`
  emit('update', priceFilter)
}
</script>

<style lang="scss" scoped>
.input {
  width: 7.5rem;
}
</style>
