<template>
  <div class="wrapper">
    <header-component />
    <main class="main">
      <slot></slot>
    </main>
    <footer-component />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
</script>

<style lang="scss" scoped>
.main {
  padding-top: 9.375rem;
  @media (width < 819.98px) {
    padding-top: 6.25rem;
  }
}
</style>
