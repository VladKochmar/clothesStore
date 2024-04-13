<template>
  <documentation-master-page>
    <div class="pb-10">
      <h1 class="main-title mb-6 mb-md-12">{{ $t('pages.returns.title') }}</h1>
      <div v-html="$t('pages.returns.text')"></div>
    </div>
  </documentation-master-page>
</template>

<script setup>
import DocumentationMasterPage from '@/masterpages/DocumentationMasterPage.vue'
</script>

<style lang="scss" scoped></style>
