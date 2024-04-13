<template>
  <documentation-master-page>
    <div class="pb-4">
      <h1 v-html="$t('pages.contacts.title')" class="main-title mb-8"></h1>
      <p class="text mb-11">
        {{ $t('pages.contacts.text') }} <a href="mailto:support@gmail.com">support@gmail.com</a>
        <br />{{ $t('pages.contacts.or') }} <a href="tel:+380731234567">+38 073 123 45 67</a>
      </p>
    </div>
  </documentation-master-page>
</template>

<script setup>
import DocumentationMasterPage from '@/masterpages/DocumentationMasterPage.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.text {
  color: $dimGray;
}
</style>
