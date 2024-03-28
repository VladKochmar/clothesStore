<template>
  <div class="wrapper">
    <main>
      <slot></slot>
    </main>
    <footer-component />
  </div>
</template>

<script setup>
import FooterComponent from '@/components/footer/FooterComponent.vue'
</script>

<style lang="scss" scoped></style>
