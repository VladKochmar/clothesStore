<template>
  <div class="nav-list">
    <div class="nav-list__title" @click="onClick">
      <strong>{{ listSettings.title[$i18n.locale] }}</strong>
      <v-icon icon="fa-solid fa-chevron-down" class="icon" :class="{ open: isOpen }"></v-icon>
    </div>
    <ul ref="dropdown" class="nav-list__dropdown">
      <li v-for="item in listSettings.list" :key="item.id" class="nav-list__item">
        <router-link :to="item.link">{{ item.title[$i18n.locale] }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'

defineProps({
  listSettings: {
    type: Object,
    required: true
  }
})

const dropdown = ref(null)
const isOpen = ref(false)

let dropdownHeight

onMounted(() => {
  if (window.innerWidth < 768) {
    dropdownHeight = dropdown.value.offsetHeight
    dropdown.value.style.height = 0
  }
})

function onClick() {
  if (window.innerWidth < 768) {
    isOpen.value = isOpen.value ? false : true

    if (isOpen.value) {
      dropdown.value.style.height = `${dropdownHeight}px`
    } else {
      dropdown.value.style.height = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables.scss';

.nav-list {
  @media (width < 767.98px) {
    padding-bottom: 0.625rem;
    border-bottom: 1px solid $nero;
  }
  // .nav-list__title
  &__title {
    font-size: 0.75rem;
    text-transform: uppercase;
    &:not(:last-child) {
      margin-bottom: 0.875rem;
    }
    .icon {
      display: none;
    }
    @media (width < 767.98px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon {
        display: block;
        transition: transform 0.3s ease 0s;
        &.open {
          transform: rotateX(180deg);
        }
      }
    }
  }
  // .nav-list__dropdown
  &__dropdown {
    @media (width < 767.98px) {
      overflow: hidden;
      transition: 0.5s;
    }
  }
  // .nav-list__item
  &__item {
    color: $dimGray;
    font-size: 0.875rem;
    line-height: 142.857143%;
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
