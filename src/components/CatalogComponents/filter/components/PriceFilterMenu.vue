<template>
  <v-menu v-model="priceMenu" :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <span v-bind="props" class="activator-btn">
        price <v-icon icon="fa-solid fa-chevron-down" />
      </span>
    </template>

    <v-card max-width="400" class="py-7 px-8">
      <strong class="text-body-2 font-weight-bold d-block mb-3">Price (€)</strong>
      <div class="d-flex align-center ga-3">
        <v-text-field
          v-model="minPrice"
          label="From"
          variant="outlined"
          class="input"
        ></v-text-field>
        <v-text-field v-model="maxPrice" label="To" variant="outlined" class="input"></v-text-field>
      </div>
      <button class="button button_black w-100" @click="applyFilter">Save</button>
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
  const priceFilter = `${minPrice.value || '0'}-${maxPrice.value || ''}`
  emit('update', priceFilter)
}
</script>

<style lang="scss" scoped>
.input {
  width: 7.5rem;
}
</style>
