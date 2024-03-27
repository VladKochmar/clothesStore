<template>
  <section class="inspire-section pt-10 pb-11">
    <div class="inspire-section__container">
      <div class="inspire-section__body">
        <h2 class="main-title text-center mb-8 mb-md-11">{{ $t('pages.about.inspire.title') }}</h2>
        <img
          src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          class="inspire-section__image mb-8 mb-md-11"
        />
        <div class="inspire-section__content">
          <strong>{{ $t('pages.about.inspire.text1') }}</strong>
          <p>{{ $t('pages.about.inspire.text2') }}</p>
          <p>{{ $t('pages.about.inspire.text3') }}</p>
          <p>{{ $t('pages.about.inspire.text4') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.inspire-section {
  // .inspire-section__body
  &__body {
    display: grid;
    justify-items: center;
    margin: 0 auto;
    max-width: 42.5rem;
  }
  // .inspire-section__image
  &__image {
    max-width: 100%;
  }
  // .inspire-section__content
  &__content {
    @media (width > 767.98px) {
      column-count: 2;
      column-gap: 4.375rem;
    }
    & > * {
      display: inline-block;
      break-inside: avoid-column;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
