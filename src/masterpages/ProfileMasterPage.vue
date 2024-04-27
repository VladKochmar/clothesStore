<template>
  <div class="wrapper">
    <header-component />
    <div class="profile">
      <div class="profile__container">
        <profile-sidebar />
        <main class="flex-1-1">
          <router-view>
            <slot></slot>
          </router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import ProfileSidebar from '@/components/ProfileSidebar.vue'
</script>

<style lang="scss" scoped>
.profile {
  padding-top: 9.375rem;
  @media (width < 819.98px) {
    padding-top: 6.25rem;
  }
  // .profile__container
  &__container {
    display: flex;
    gap: 1.5rem 4.625rem;
    @media (width < 519.98px) {
      flex-direction: column;
    }
  }
}
</style>
