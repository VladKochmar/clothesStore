<template>
  <main-master-page>
    <div class="d-flex flex-column align-center py-16 px-5">
      <div class="img-container mb-6">
        <img src="@/assets/img/not_found/404.png" alt="404" class="w-100" />
      </div>
      <h1 class="title mb-2">{{ $t('pages.not-found.title') }}</h1>
      <p class="mb-4">{{ $t('pages.not-found.text') }}</p>
      <RouterLink :to="{ name: 'home' }" class="button button_black">{{
        $t('menu.home')
      }}</RouterLink>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
</script>

<style lang="scss" scoped>
.img-container {
  max-width: 22.5rem;
}
</style>
