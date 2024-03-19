<template>
  <div class="sort d-inline-flex ga-4">
    sort
    <select v-model="currentSortType" @change="$emit('update', currentSortType)" class="select">
      <option value="auto" selected>auto</option>
      <option value="low">low to high</option>
      <option value="high">high to low</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  sortType: {
    type: String,
    required: true
  }
})

const currentSortType = ref(props.sortType)
</script>

<style lang="scss" scoped>
.sort {
  color: rgba(0, 0, 0, 0.3);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
}

.select {
  text-transform: uppercase;
  font-weight: 700;
  outline: none;
}
</style>
