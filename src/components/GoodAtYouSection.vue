<template>
  <section class="good-at-you">
    <h2 class="title text-center mb-7 mb-lg-12" v-html="$t('pages.home.good-at-you')"></h2>
    <div class="good-at-you__body">
      <swiper
        :breakpoints="{
          0: {
            spaceBetween: 4,
            slidesPerView: 2
          },
          992: {
            spaceBetween: 16,
            slidesPerView: 2
          }
        }"
        :autoplay="{
          delay: 3000,
          pauseOnMouseEnter: true
        }"
        :initialSlide="1"
      >
        <swiper-slide v-for="slide in slides" :key="slide.id" class="image-slide">
          <img :src="slide.imgSrc" class="image-slide__image" loading="lazy" />
          <a :href="slide.link" class="image-slide__button button ga-2">
            <v-icon icon="fa-brands fa-instagram"></v-icon>
            Instagram
          </a>
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

defineProps({
  slides: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
.good-at-you {
  padding: 3.75rem 0 4.375rem;
  @media (width <= 1024px) {
    padding: 1.875rem 0 4.375rem;
  }
  // .good-at-you__body
  &__body {
    max-width: 950px;
    margin: 0 auto;
  }
  .swiper {
    overflow: visible;
  }
}
.image-slide {
  position: relative;
  padding-top: 49.2%;
  // .image-slide__image
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  // .image-slide__button
  &__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease 0s;
  }
  @media (any-hover: hover) {
    &:hover {
      .image-slide__button {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
