<template>
  <div :class="{ open: isMenuOpen }">
    <button @click="onClick" class="menu-icon">
      <span></span>
    </button>
    <nav class="mobile-menu">
      <div class="d-inline-flex align-center ga-3">
        <lang-switcher />
        <registration-section />
      </div>
      <ul class="mobile-menu__list">
        <li class="mobile-menu__item">
          <router-link :to="{ name: 'catalog' }">{{ $t('menu.catalog') }}</router-link>
        </li>
        <li class="mobile-menu__item">
          <router-link :to="{ name: 'catalog-by-type', params: { clothingType: 'shirts' } }">{{
            $t('menu.shirts')
          }}</router-link>
        </li>
        <li class="mobile-menu__item">
          <router-link :to="{ name: 'catalog-by-type', params: { clothingType: 't-shirts' } }">{{
            $t('menu.t-shirts')
          }}</router-link>
        </li>
        <li class="mobile-menu__item">
          <router-link :to="{ name: 'catalog-by-type', params: { clothingType: 'sweatshirts' } }">{{
            $t('menu.sweatshirts')
          }}</router-link>
        </li>
        <li class="mobile-menu__item">
          <router-link :to="{ name: 'about' }">{{ $t('menu.about') }}</router-link>
        </li>
        <li class="mobile-menu__item">
          <router-link :to="{ name: 'home' }">{{ $t('menu.contacts') }}</router-link>
        </li>
      </ul>
      <a href="mailto:vladkochmar17@gmail.com" class="mobile-menu__support">
        {{ $t('header.support') }}
      </a>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LangSwitcher from './LangSwitcher.vue'
import RegistrationSection from './registration/RegistrationSection.vue'

const isMenuOpen = ref(false)

function onClick() {
  isMenuOpen.value = isMenuOpen.value ? false : true
  document.body.classList.toggle('lock')
}
</script>

<style lang="scss" scoped>
.sign-up {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.75rem;
  height: 2.75rem;
  i {
    font-size: 1.25rem;
  }
}
.open {
  .mobile-menu {
    right: 0;
  }
  .menu-icon {
    &::before {
      top: 21px;
      left: 30%;
      transform: rotate(-45deg);
    }
    &::after {
      left: 30%;
      bottom: 22px;
      transform: rotate(45deg);
    }
    span {
      width: 0;
    }
  }
}
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 3.125rem 1.25rem;
  overflow: auto;
  display: grid;
  align-content: start;
  gap: 3rem 0;
  justify-items: end;
  transition: right 0.3s ease 0s;
  // .mobile-menu__item
  &__item {
    text-align: right;
    font-family: 'Inconsolata', sans-serif;
    font-size: 1.125rem;
    line-height: 1.5;
    white-space: nowrap;
    text-transform: uppercase;
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }
  // .mobile-menu__support
  &__support {
    font-size: 0.75rem;
  }
}

.menu-icon {
  width: 2.75rem;
  height: 2.75rem;
  position: relative;
  z-index: 11;
  &::before,
  &::after {
    content: '';
    transition: all 0.3s ease 0s;
  }
  &::before,
  &::after,
  span {
    width: 1rem;
    height: 1.5px;
    background-color: #000;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &::before {
    top: 1rem;
  }
  &::after {
    bottom: 1rem;
  }
  span {
    top: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease 0s;
  }
}
</style>
