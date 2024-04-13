<template>
  <div class="wrapper">
    <header-component />
    <main class="documentation">
      <div class="documentation__container">
        <v-breadcrumbs :items="breadcrumps" class="pt-6 pb-13" />
        <div class="d-flex gc-15">
          <documentation-sidebar />
          <slot>
            <router-view />
          </slot>
        </div>
      </div>
    </main>
    <footer-component />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
import DocumentationSidebar from '@/components/DocumentationSidebar.vue'

import { useRoute } from 'vue-router'
const route = useRoute()

const breadcrumps = [
  { title: 'Home', disabled: false, href: '/' },
  { title: route.name, disabled: true }
]
</script>

<style lang="scss" scoped></style>
