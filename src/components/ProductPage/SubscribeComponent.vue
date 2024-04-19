<template>
  <section class="subscribe">
    <div class="subscribe__container">
      <div class="d-flex flex-sm-row flex-column align-center gr-6">
        <div class="subscribe__img-box">
          <img
            src="https://softgoat.centracdn.net/client/dynamic/images/2392_e15a39a5d8-chunky_t-shirt_greige_265_2-size1024.jpg"
          />
        </div>
        <div class="subscribe__content">
          <h2 v-html="$t('pages.product.subscribe.title')" class="main-title mb-6"></h2>
          <label for="email" class="subscribe__label d-inline-block mb-8">
            {{ $t('pages.product.subscribe.label') }}
          </label>
          <v-text-field id="email" :label="$t('fields.email')" variant="outlined"></v-text-field>
          <button class="button button_black">{{ $t('buttons.subscribe') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.subscribe {
  padding: 0 0 2.5rem;
  // .subscribe__container
  &__container {
  }
  // .subscribe__img-box
  &__img-box {
    img {
      max-width: 100%;
    }
    @media (min-width: 600px) {
      flex: 0 1 50%;
      position: relative;
      padding-top: 60%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
  // .subscribe__content
  &__content {
    display: grid;
    justify-content: center;
    @media (min-width: 600px) {
      flex: 0 1 50%;
      padding: 1.75rem 1.5rem;
    }
  }
  // .subscribe__label
  &__label {
  }
}
</style>
