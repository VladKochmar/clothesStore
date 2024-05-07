<template>
  <div class="accordion py-6">
    <div class="accordion__title" @click="onClick">
      <strong>{{ accordionData.title[$i18n.locale] }}</strong>
      <button class="accordion__icon" :class="{ open: isOpen }"></button>
    </div>
    <div ref="dropdown" class="accordion__dropdown">
      <div ref="content" class="pt-6">{{ accordionData.text[$i18n.locale] }}</div>
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
const content = ref(null)
const isOpen = ref(false)
const dropdownHeight = ref(0)

onMounted(() => {
  updateDropdownHeight()
})

function onClick() {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    dropdown.value.classList.remove('accordion__dropdown')
    dropdown.value.classList.add('opening')

    dropdownHeight.value = content.value.offsetHeight
    dropdown.value.style.height = `${dropdownHeight.value}px`

    setTimeout(() => {
      dropdown.value.classList.remove('opening')
      dropdown.value.style.height = ''

      dropdown.value.classList.add('accordion__dropdown')
      dropdown.value.classList.add('open')
    }, 300)
  } else {
    dropdown.value.style.height = `${dropdownHeight.value}px`
    dropdown.value.classList.remove('open')
    dropdown.value.classList.remove('accordion__dropdown')
    setTimeout(() => {
      dropdown.value.classList.add('opening')
      dropdown.value.style.height = 0
    }, 0)

    setTimeout(() => {
      dropdown.value.classList.remove('opening')
      dropdown.value.classList.add('accordion__dropdown')
    }, 300)
  }
}

function updateDropdownHeight() {
  dropdownHeight.value = content.value.offsetHeight
  if (!isOpen.value) {
    dropdown.value.style.height = 0
  } else {
    dropdown.value.style.height = `${dropdownHeight.value}px`
  }
}
</script>

<style lang="scss">
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
  .opening {
    height: 0px;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  // .accordion__dropdown
  &__dropdown {
    &:not(.open) {
      display: none;
    }
  }
}
</style>
