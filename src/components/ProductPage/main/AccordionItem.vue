<template>
  <div class="accordion py-6">
    <div class="accordion__title" @click="onClick">
      <strong>{{ accordionData.title[$i18n.locale] }}</strong>
      <button class="accordion__icon" :class="{ open: isOpen }"></button>
    </div>
    <div ref="dropdown" class="accordion__dropdown">
      <div class="pt-6">{{ accordionData.text[$i18n.locale] }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  accordionData: {
    type: Object,
    required: true
  }
})

const dropdown = ref(null)
const isOpen = ref(false)

let dropdownHeight

onMounted(() => {
  dropdownHeight = dropdown.value.offsetHeight
  dropdown.value.style.height = 0
})

function onClick() {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    dropdown.value.style.height = `${dropdownHeight}px`
  } else {
    dropdown.value.style.height = 0
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.accordion {
  &:first-child {
    border-top: 1px solid $dimGray;
  }
  border-bottom: 1px solid $dimGray;
  // .accordion__title
  &__title {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  // .accordion__icon
  &__icon {
    position: relative;
    height: 0.625rem;
    width: 0.625rem;
    &::before,
    &::after {
      content: '';
      display: block;
      top: 0;
      right: 0;
      height: 1.5px;
      width: 100%;
      background-color: #000;
    }
    &::before {
      top: 50%;
      transform: translate(0, 1.5px);
    }
    &::after {
      transform: rotate(90deg);
      transition: transform 0.3s ease 0s;
    }
    &.open {
      &::after {
        top: 50%;
        transform: rotate(0deg);
      }
    }
  }
  // .accordion__dropdown
  &__dropdown {
    overflow: hidden;
    transition: 0.5s;
  }
}
</style>
