<template>
  <section class="comfortable">
    <h2 class="title text-center mb-7 mb-lg-12">{{ $t('pages.home.comfortable') }}</h2>
    <swiper
      :breakpoints="{
        0: {
          spaceBetween: 20,
          slidesPerView: 1.3
        },
        992: {
          spaceBetween: 40,
          slidesPerView: 2
        }
      }"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true
      }"
      :initialSlide="1"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id" class="slide">
        <img :src="slide.imgSrc" class="slide__image" loading="lazy" />
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
    </swiper>
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

<style lang="scss" scoped>
.comfortable {
  padding: 3.75rem 0;
  @media (width <= 1024px) {
    padding: 1.875rem 0;
  }
}
.slide {
  position: relative;
  padding-top: 34%;
  @media (width < 992px) {
    padding-top: 67.71%;
  }
  // .slide__image
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
