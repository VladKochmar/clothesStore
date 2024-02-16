<script setup>
import { RouterView } from 'vue-router'
import { useLocales } from './modulesHelpers/i18n'

const { checkLocale } = useLocales()
checkLocale()
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
