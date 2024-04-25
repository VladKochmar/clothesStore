<template>
  <div class="mobile-header-bottom d-flex align-center justify-space-between gc-4">
    <div class="actions">
      <mobile-menu />
      <search-section />
    </div>
    <router-link :to="{ name: 'home' }" class="mobile-header-bottom__logo"
      ><img src="@/assets/img/icon.png" alt="Logo"
    /></router-link>
    <div class="actions">
      <router-link :to="{ name: 'wishlist' }" class="actions__item">
        <v-badge v-if="getCurrentUser.wishlist.length" :content="getCurrentUser.wishlist.length">
          <v-icon icon="fa-regular fa-heart"></v-icon>
        </v-badge>
        <v-icon v-else icon="fa-regular fa-heart"></v-icon>
      </router-link>
      <router-link :to="{ name: 'cart' }" class="actions__item">
        <v-badge v-if="getCurrentUser.cart.length" :content="getCurrentUser.cart.length">
          <v-icon icon="fa-solid fa-cart-shopping"></v-icon>
        </v-badge>
        <v-icon v-else icon="fa-solid fa-cart-shopping"></v-icon>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

import MobileMenu from './MobileMenu.vue'
import SearchSection from './SearchSection.vue'

import { useUsersStore } from '@/stores/users'
const { getCurrentUser } = toRefs(useUsersStore())
</script>

<style lang="scss" scoped>
.mobile-header-bottom {
  padding: 0.75rem 0;
  // .mobile-header-bottom__logo
  &__logo {
    img {
      max-width: 3rem;
    }
  }
}
.actions {
  display: flex;
  align-items: center;
  // .actions__item
  &__item {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.75rem;
    height: 2.75rem;
    i {
      font-size: 1.25rem;
    }
  }
}
</style>
