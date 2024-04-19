<template>
  <button class="size-button" :class="{ 'out-of-stock': !isAvailable }" :disabled="!isAvailable">
    {{ size }}
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    required: true
  },
  availableSizes: {
    type: Array,
    required: true
  }
})

const isAvailable = computed(() => props.availableSizes?.includes(props.size))
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.size-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid $pinkSwan;
  &.out-of-stock {
    color: $pinkSwan;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 1.5px;
      width: 100%;
      background-color: $pinkSwan;
      transform: rotate(45deg);
    }
  }
}
</style>
