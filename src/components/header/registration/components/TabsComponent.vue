<template>
  <v-tabs v-model="tab" align-tabs="title">
    <v-tab v-for="title in tabsTitles" :key="title.id" :value="title.id">
      {{ title[$i18n.locale] }}
    </v-tab>
  </v-tabs>
  <v-window v-model="tab" class="tabs-body px-3">
    <v-window-item :value="1">
      <item-tab @close="$emit('close')" />
    </v-window-item>
    <v-window-item :value="2">
      <item-tab :is-sign-up="true" @close="$emit('close')" />
    </v-window-item>
  </v-window>
</template>

<script setup>
import { ref } from 'vue'

import ItemTab from './ItemTab.vue'

// Tabs Settings
const tab = ref(null)
const tabsTitles = [
  { id: 1, en: 'Log In', uk: 'Увійти' },
  { id: 2, en: 'Sign Up', uk: 'Зареєструватися' }
]
</script>

<style lang="scss" scoped>
.tabs-body {
  width: 100%;
  max-width: 21.25rem;
}
</style>
