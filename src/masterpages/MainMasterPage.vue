<template>
  <div class="wrapper">
    <header-component />
    <main>
      <slot></slot>
    </main>
    <footer-component />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
</script>

<style lang="scss" scoped></style>
