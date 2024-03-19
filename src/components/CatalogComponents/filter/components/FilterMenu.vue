<template>
  <v-menu v-model="menuOpen" :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <span v-bind="props" class="activator-btn">
        {{ label }} <v-icon icon="fa-solid fa-chevron-down" />
      </span>
    </template>

    <v-card max-width="400" class="py-7 px-8">
      <strong class="text-body-2 font-weight-bold d-block mb-3">{{ label }}</strong>
      <ul class="options-list">
        <li v-for="option in options" :key="option.id">
          <button
            v-if="isColorPicker"
            class="options-list__button rounded-button"
            :class="{ 'current-option': option.title === currentOption }"
            :style="{ backgroundColor: option.title }"
            @click="selectOption(option)"
          ></button>
          <button
            v-else
            class="options-list__button rounded-button"
            :class="{ 'current-option': option.title === currentOption }"
            @click="selectOption(option)"
          >
            {{ option.title }}
          </button>
        </li>
      </ul>
    </v-card>
  </v-menu>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update'])

function selectOption(option) {
  emit('update', option.title)
}

const menuOpen = ref(false)

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  currentOption: {
    type: String,
    default: ''
  }
})

const isColorPicker = props.label === 'Color'
</script>

<style lang="scss" scoped>
.current-option {
  border: 2px solid #828282;
}
.options-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 0.5rem;
  // .options-list__button
  &__button {
    font-size: 0.875rem;
    width: 3rem;
    height: 3rem;
  }
}
</style>
