<template>
  <div class="header-bottom">
    <div class="header-bottom__container header-bottom__container_big">
      <div class="d-flex align-center justify-space-between gc-4">
        <router-link :to="{ name: 'home' }" class="header-bottom__logo">
          <img src="@/assets/img/icon.png" alt="Logo" />
        </router-link>
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <router-link :to="{ name: 'catalog' }">{{ $t('menu.catalog') }}</router-link>
            </li>
            <li class="menu__item">
              <router-link :to="{ name: 'catalog-by-type', params: { clothingType: 'shirts' } }">{{
                $t('menu.shirts')
              }}</router-link>
            </li>
            <li class="menu__item">
              <router-link
                :to="{ name: 'catalog-by-type', params: { clothingType: 't-shirts' } }"
                >{{ $t('menu.t-shirts') }}</router-link
              >
            </li>
            <li class="menu__item">
              <router-link
                :to="{ name: 'catalog-by-type', params: { clothingType: 'sweatshirts' } }"
                >{{ $t('menu.sweatshirts') }}</router-link
              >
            </li>
            <li class="menu__item">
              <router-link :to="{ name: 'about' }">{{ $t('menu.about') }}</router-link>
            </li>
            <li class="menu__item">
              <router-link :to="{ name: 'contacts' }">{{ $t('menu.contacts') }}</router-link>
            </li>
          </ul>
        </nav>
        <ul class="actions">
          <li>
            <search-section />
          </li>
          <li class="actions__item">
            <router-link :to="{ name: 'wishlist' }">
              <v-badge
                v-if="getCurrentUser.wishlist.length"
                :content="getCurrentUser.wishlist.length"
              >
                <v-icon icon="fa-regular fa-heart"></v-icon>
              </v-badge>
              <v-icon v-else icon="fa-regular fa-heart"></v-icon>
            </router-link>
          </li>
          <li class="actions__item">
            <registration-section />
          </li>
          <li class="actions__item">
            <router-link :to="{ name: 'cart' }">
              <v-badge v-if="getCurrentUser.cart.length" :content="getCurrentUser.cart.length">
                <v-icon icon="fa-solid fa-cart-shopping"></v-icon>
              </v-badge>
              <v-icon v-else icon="fa-solid fa-cart-shopping"></v-icon>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

import SearchSection from './SearchSection.vue'
import RegistrationSection from './registration/RegistrationSection.vue'

import { useUsersStore } from '@/stores/users'
const { getCurrentUser } = toRefs(useUsersStore())
</script>

<style lang="scss" scoped>
.header-bottom {
  padding: 1rem 0;
  border-bottom: 1px solid #f3f3f3;
  // .header-bottom__logo
  &__logo {
    max-width: 4rem;
    img {
      max-width: 100%;
    }
  }
}
.menu {
  flex: 1 1 100%;
  // .menu__list
  &__list {
    display: flex;
    justify-content: center;
    gap: 0 3rem;
    @media (width < 1100.98px) {
      gap: 0 1.5rem;
    }
  }
  // .menu__item
  &__item {
    font-family: 'Inconsolata', sans-serif;
    line-height: 1.5;
    white-space: nowrap;
    text-transform: uppercase;
  }
}
.actions {
  display: flex;
  // .actions__item
  &__item {
    padding: 1.75rem 1.875rem;
    @media (width < 1100.98px) {
      padding: 0.8125rem 0.9375rem;
    }
    i {
      font-size: 1.25rem;
    }
  }
}
</style>
