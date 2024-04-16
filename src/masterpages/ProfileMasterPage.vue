<template>
  <div class="wrapper">
    <header-component />
    <div class="profile py-15">
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
  // .profile__container
  &__container {
    display: flex;
    gap: 1.5rem 4.625rem;
    @media (width < 700.98px) {
      flex-direction: column;
    }
  }
}
</style>
