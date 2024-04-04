<template>
  <div class="header-top">
    <div class="header-top__container">
      <div class="d-flex align-center justify-space-between gc-3">
        <lang-switcher />
        <p class="text-center">{{ $t('header.shipping') }}</p>
        <a href="mailto:vladkochmar17@gmail.com">{{ $t('header.support') }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import LangSwitcher from './LangSwitcher.vue'
</script>

<style lang="scss">
@import '@/assets/scss/base/variables.scss';

.header-top {
  color: $white;
  font-size: 0.75rem;
  line-height: 133.333333%;
  background-color: $black;
}
</style>
