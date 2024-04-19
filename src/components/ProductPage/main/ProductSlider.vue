<template>
  <div v-if="getCurrentItem?.images" class="d-flex gc-4 align-start">
    <swiper
      @swiper="setThumbsSwiper"
      :slidesPerView="thumbsPerView"
      :spaceBetween="16"
      :direction="'vertical'"
      class="thumb-slider"
    >
      <swiper-slide
        v-for="(image, index) in getCurrentItem?.images"
        :key="index"
        class="thumb-slider__slide"
      >
        <img :src="image" />
      </swiper-slide>
    </swiper>
    <swiper
      :spaceBetween="16"
      :thumbs="{ swiper: thumbsSwiper }"
      :breakpoints="{
        0: {
          direction: 'horizontal',
          slidesPerView: 1.1
        },
        768: {
          direction: 'horizontal',
          slidesPerView: 1.25
        },
        992: {
          direction: 'vertical',
          slidesPerView: 1
        }
      }"
      class="slider-product"
    >
      <swiper-slide
        v-for="(image, index) in getCurrentItem?.images"
        :key="index"
        class="slider-product__slide"
      >
        <img :src="image" />
      </swiper-slide>
    </swiper>
  </div>
  <div v-else class="product-img">
    <img :src="getCurrentItem?.imgSrc" :alt="getCurrentItem?.title" />
  </div>
</template>

<script setup>
import { ref, computed, toRefs } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/thumbs'

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

// Getting Product data
import { useCatalogStore } from '@/stores/catalog'
const { getCurrentItem } = toRefs(useCatalogStore())

const thumbsPerView = computed(() =>
  getCurrentItem.value?.images?.length < 4 ? getCurrentItem.value?.images?.length : 4
)
</script>

<style lang="scss" scoped>
.product-img {
  position: relative;
  padding-top: 40%;
  @media (width < 767.98px) {
    padding-top: 120%;
  }
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

.thumb-slider {
  min-width: 0;
  flex: 0 1 7.25rem;
  max-height: 37.5rem;
  @media (width < 991.98px) {
    display: none;
  }
  // .thumb-slider__slide
  &__slide {
    &.swiper-slide-visible.swiper-slide-thumb-active {
      img {
        filter: grayscale(0%);
      }
    }
    cursor: pointer;
    position: relative;
    padding-top: 1%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: grayscale(75%);
      transition: filter 0.3s ease 0s;
    }
  }
}

.slider-product {
  max-height: 750px;
  flex: 1 1 100%;
  min-width: 0;
  &.swiper {
    overflow: hidden;
  }
  // .slider-product__slide
  &__slide {
    background-color: green;
    position: relative;
    padding-top: 1%;
    @media (width < 991.98px) {
      padding-top: 115%;
    }
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
</style>
