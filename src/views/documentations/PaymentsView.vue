<template>
  <documentation-master-page>
    <div class="pb-10">
      <h1 class="main-title mb-12">{{ $t('pages.payments.title') }}</h1>
      <div>
        <div
          v-for="method in paymentsMethods"
          :key="method.id"
          class="d-flex flex-sm-row flex-column gr-4 gc-10 pt-5 pb-10 px-10 border text-size"
        >
          <div class="payment-type">{{ method.type[$i18n.locale] }}</div>
          <div class="d-flex gc-5 flex-1-1">
            <img
              v-for="(imagePath, index) in method.images"
              :key="index"
              :src="getImagePath(imagePath)"
              class="payment-image"
              :class="{ 'one-image': method.images.length > 1 }"
            />
          </div>
          <div>{{ method.duration[$i18n.locale] }}</div>
        </div>
      </div>
    </div>
  </documentation-master-page>
</template>

<script setup>
import DocumentationMasterPage from '@/masterpages/DocumentationMasterPage.vue'

const paymentsMethods = [
  {
    id: 1,
    type: { en: 'Bank', uk: 'Банк' },
    images: ['banks/bank.svg', 'banks/bank2.svg'],
    duration: { en: '1 - 2 business days', uk: '1 - 2 робочі дні' }
  },
  {
    id: 2,
    type: { en: 'Online', uk: 'Онлайн' },
    images: ['online/image.jpg'],
    duration: { en: 'Instantly up to 1 day', uk: 'Моментально до 1 дня' }
  }
]

const getImagePath = (imgPath) =>
  new URL(`../../assets/img/payments/${imgPath}`, import.meta.url).href
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.text-size {
  font-size: 0.875rem;
}
.payment-type {
  color: $suvaGrey;
}

.border {
  border: 1px solid $dimGray;
}

.payment-image {
  max-width: 100%;
  &.one-image {
    max-width: 3rem;
    width: 100%;
  }
}
</style>
