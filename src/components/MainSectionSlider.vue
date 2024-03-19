<template>
  <section class="pa-6">
    <swiper
      :spaceBetween="24"
      :autoHeight="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true
      }"
    >
      <swiper-slide class="main-swiper-slide">
        <div class="main-swiper-slide__container">
          <div class="main-swiper-slide__content">
            <h1
              class="main-title mb-3 mb-md-6"
              v-html="$t('pages.home.main-section.slide-one.title')"
            ></h1>
            <p class="main-swiper-slide__text mb-3 mb-md-12">
              {{ $t('pages.home.main-section.slide-one.text') }}
            </p>
            <div class="d-inline-flex flex-column flex-sm-row ga-2 ga-md-3">
              <router-link
                :to="{
                  name: 'catalog',
                  params: { clothingType: 'shirts' },
                  query: { color: 'black', size: 'XS', price: '100-300' }
                }"
                class="button button_black"
              >
                {{ $t('buttons.cart') }}
              </router-link>
              <router-link :to="{ name: 'home' }" class="button button_border">
                {{ $t('buttons.fitting') }}
              </router-link>
            </div>
          </div>
          <div class="main-swiper-slide__block-img">
            <img src="../assets/img/home/main-section-slider/image01.png" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="main-swiper-slide">
        <div class="main-swiper-slide__container">
          <div class="main-swiper-slide__content">
            <h2
              class="main-title mb-3 mb-md-6"
              v-html="$t('pages.home.main-section.slide-two.title')"
            ></h2>
            <p class="main-swiper-slide__text mb-3 mb-md-12">
              {{ $t('pages.home.main-section.slide-two.text') }}
            </p>
          </div>
          <div class="main-swiper-slide__block-img">
            <img src="@/assets/img/home/main-section-slider/image02.png" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="main-swiper-slide">
        <div class="main-swiper-slide__container">
          <div class="main-swiper-slide__content">
            <h1
              class="main-title mb-3 mb-md-6"
              v-html="$t('pages.home.main-section.slide-three.title')"
            ></h1>
            <p class="main-swiper-slide__text mb-3 mb-md-12">
              {{ $t('pages.home.main-section.slide-three.text') }}
            </p>
            <div class="d-inline-flex flex-column flex-sm-row ga-2 ga-md-3">
              <router-link :to="{ name: 'home' }" class="button button_black">
                {{ $t('buttons.cart') }}
              </router-link>
            </div>
          </div>
          <div class="main-swiper-slide__block-img">
            <img src="@/assets/img/home/main-section-slider/image03.png" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>

<style lang="scss">
.main-swiper-slide {
  background-color: #dee0de;
  // .main-swiper-slide__container
  &__container {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    justify-content: space-between;
    @media (width < 992px) {
      flex-direction: column;
    }
  }
  // .main-swiper-slide__content
  &__content {
    @media (width < 992px) {
      padding: 2.75rem 0 0 0;
      text-align: center;
    }
    @media (width > 992px) {
      flex: 0 0 430px;
      padding: 1.5rem 0;
    }
  }
  // .main-swiper-slide__text
  &__text {
    color: #666;
    @media (width < 992px) {
      font-size: 0.75rem;
    }
  }
  // .main-swiper-slide__block-img
  &__block-img {
    @media (width > 992px) {
      flex: 0 1 33.75rem;
    }
    img {
      max-width: 100%;
    }
  }
  .button {
    @media (width < 992px) {
      padding: 0.75rem 1.875rem;
    }
  }
}
.swiper-pagination {
  display: flex;
  gap: 0 0.25rem;
  justify-content: center;
  padding: 1.5rem 0;
}
.swiper-pagination-bullet {
  width: 2.5rem;
  height: 0.125rem;
  background-color: #eaeaeb;
  border-radius: 0.25rem;
  transition:
    background 0.3s ease 0s,
    transform 0.3s ease 0s;
  @media (any-hover: hover) {
    &:hover {
      transform: scaleY(2.5);
    }
  }
  &.swiper-pagination-bullet-active {
    background-color: #393939;
  }
}
</style>
