<template>
  <aside class="profile-sidebar">
    <nav>
      <ul class="profile-sidebar__list">
        <li>
          <router-link :to="{ name: 'profile' }">
            {{ $t('profile-sidebar.details') }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'orders' }">
            {{ $t('profile-sidebar.history') }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'addresses' }">
            {{ $t('profile-sidebar.addresses') }}
          </router-link>
        </li>
        <li>
          <button id="logOut" @click="signOut">{{ $t('buttons.log-out') }}</button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const { logOut } = useAuthStore()

import { useRouter } from 'vue-router'
const router = useRouter()

function signOut() {
  logOut()
  router.push({ name: 'home' })
}
</script>

<style lang="scss" scoped>
.profile-sidebar {
  @media (width > 519.98px) {
    flex: 0 0 8.125rem;
  }
  // .profile-sidebar__list
  &__list {
    white-space: nowrap;
    li {
      color: #a3a3a3;
      font-size: 0.875rem;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
      .router-link-active {
        color: #000;
      }
    }
  }
}
</style>
