<template>
  <div class="footer__container">
    <div class="footer-top">
      <div class="footer-top__img-wrapper">
        <img src="@/assets/img/icon.png" alt="icon" />
      </div>
      <nav class="footer-top__navigation">
        <nav-list v-for="listData in footer" :key="listData.id" :list-settings="listData" />
      </nav>
      <div class="mw-390">
        <strong class="footer-top__title">Join Our Mailing List</strong>
        <v-text-field
          label="E-mail"
          variant="outlined"
          type="email"
          append-inner-icon="fa-solid fa-arrow-right"
        ></v-text-field>
        <p class="footer-top__text">
          By signing up you agree with our Terms & Conditions and Privacy Policy. <br />
          To opt out, click Unsubscribe in our emails.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Footer navigation
import NavList from './NavList.vue'
import footer from '@/data/footer.json'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables.scss';

.footer-top {
  @media (width > 767.98px) {
    display: flex;
    gap: 0 2.25rem;
    justify-content: space-between;
  }
  padding: 2.75rem 0 2rem;
  // .footer-top__img-wrapper
  &__img-wrapper {
    @media (width < 767.98px) {
      display: none;
    }
    img {
      max-width: 100%;
    }
  }
  // .footer-top__navigation
  &__navigation {
    flex: 0 1 31.875rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    @media (width < 767.98px) {
      flex-direction: column;
      &:not(:last-child) {
        margin-bottom: 1.75rem;
      }
    }
  }
  // .footer-top__title
  &__title {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  // .footer-top__text
  &__text {
    color: $dimGray;
    font-size: 0.75rem;
    line-height: 166.666667%;
  }
}
</style>
