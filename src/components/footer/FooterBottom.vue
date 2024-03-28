<template>
  <div class="footer__container">
    <div class="footer-bottom">
      <p class="footer-bottom__text">©2024. ClothesStore</p>
      <ul class="d-inline-flex gc-4 gc-sm-10">
        <li class="footer-bottom__text">
          <router-link :to="{ name: 'home' }">Terms & Condintions</router-link>
        </li>
        <li class="footer-bottom__text">
          <router-link :to="{ name: 'home' }">Privacy Policy</router-link>
        </li>
      </ul>
      <ul class="d-inline-flex align-center ga-2">
        <li>
          <a href="#" class="social-wrapper"><v-icon icon="fa-brands fa-facebook-f" /></a>
        </li>
        <a href="#" class="social-wrapper"><v-icon icon="fa-brands fa-instagram" /></a>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables.scss';

.footer-bottom {
  padding: 1.5rem 0;
  display: grid;
  align-items: center;
  gap: 1.75rem 1rem;
  grid-template-columns: 1fr minmax(auto, 300px) auto;
  @media (width < 599.98px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0.75rem 0;
  }
  // .footer-bottom__text
  &__text {
    color: $suvaGrey;
    font-size: 0.75rem;
    line-height: 133.333333%;
    @media (width > 359.98px) {
      white-space: nowrap;
    }
  }
}

.social-wrapper {
  color: $nero;
  font-size: 0.875rem;
  display: inline-flex;
  padding: 0.3125rem;
}
</style>
