<template>
  <div class="lang-switcher">
    <v-select
      v-model="currentLocale"
      :items="languages"
      item-title="title"
      item-value="value"
      density="compact"
      variant="underlined"
    />
  </div>
</template>

<script setup>
const languages = [
  { title: 'En', value: 'en' },
  { title: 'Укр', value: 'uk' }
]

import { ref, watch } from 'vue'
import { useLocales } from '@/modulesHelpers/i18n'
const { setLocale, locale } = useLocales()

const currentLocale = ref(locale)

watch(currentLocale, () => {
  setLocale(currentLocale.value)
})
</script>

<style lang="scss">
.lang-switcher {
  display: inline-block;
  .v-field__input {
    padding: 0;
  }
  .v-field.v-field--variant-underlined .v-field__append-inner {
    padding-top: 0;
    align-items: center;
  }
  .v-select__selection-text {
    font-size: 0.75rem;
  }
  i {
    &::before {
      font-size: 0.75rem;
    }
  }
  .v-input__details,
  .v-field__outline {
    display: none;
  }
}
</style>
