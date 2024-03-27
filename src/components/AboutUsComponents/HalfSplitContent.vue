<template>
  <article class="info-article">
    <div
      class="d-flex flex-column-reverse flex-sm-row"
      :class="{ 'flex-sm-row-reverse': isReverse }"
    >
      <div class="content-container align-self-center text-center py-16 px-5">
        <h2 class="title mb-4">{{ contentData.title[locale] }}</h2>
        <p>{{ contentData.text[locale] }}</p>
      </div>
      <div class="img-container">
        <img :src="contentData.imgSrc" :alt="contentData.title[locale]" />
      </div>
    </div>
  </article>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

defineProps({
  contentData: {
    type: Object,
    required: true
  },
  isReverse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.info-article {
  max-width: 1440px;
  margin: 0 auto;
}
.content-container {
  flex: 1 1 50%;
  display: grid;
  justify-content: center;
  & > * {
    max-width: 25rem;
  }
}
.img-container {
  flex: 1 1 50%;
  position: relative;
  padding-top: 50%;
  @media (width < 599.98px) {
    padding-top: 100%;
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
</style>
