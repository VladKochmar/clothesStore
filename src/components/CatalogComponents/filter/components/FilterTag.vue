<template>
  <div class="d-inline-flex align-center ga-2 rounded-pill rounded-button py-3 px-4">
    <slot>
      {{ label }}
    </slot>
    <button @click="$emit('clear')">
      <v-icon icon="fa-solid fa-xmark" class="fz-small"></v-icon>
    </button>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped></style>
