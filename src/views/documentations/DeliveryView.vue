<template>
  <documentation-master-page>
    <div class="flex-1-1 pb-10">
      <h1 class="main-title mb-12">{{ $t('pages.delivery.title') }}</h1>
      <div>
        <div
          v-for="delivery in deliveryList"
          :key="delivery.id"
          class="d-flex align-center gc-7 pa-4 pt-sm-5 pb-sm-10 px-sm-10 border text-size"
        >
          <div class="countries-list">{{ delivery.country[$i18n.locale] }}</div>
          <div class="price flex-1-1">{{ delivery.price[$i18n.locale] }}</div>
          <div>{{ delivery.duration[$i18n.locale] }}</div>
        </div>
      </div>
    </div>
  </documentation-master-page>
</template>

<script setup>
import DocumentationMasterPage from '@/masterpages/DocumentationMasterPage.vue'

const deliveryList = [
  {
    id: 1,
    country: { en: 'Ukraine', uk: 'Україна' },
    price: { en: 'Free', uk: 'Безкоштовно' },
    duration: { en: '1 day', uk: '1 день' }
  },
  {
    id: 2,
    country: {
      en: 'Poland, Czech Republic, Slovakia, Slovenia, Germany',
      uk: 'Польща, Чехія, Словаччина, Словенія, Німеччина'
    },
    price: { en: '18$', uk: '18$' },
    duration: { en: '1 - 2 business days', uk: '1 - 2 робочі дні' }
  },
  {
    id: 3,
    country: { en: 'France, Spain, England, Italy', uk: 'Франція, Іспанія, Англія, Італія' },
    price: { en: '25$', uk: '25$' },
    duration: { en: '5 - 7 business days', uk: '5 - 7 робочих днів' }
  }
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.text-size {
  font-size: 0.875rem;
  @media (width < 549.98px) {
    font-size: 0.75rem;
  }
}

.countries-list {
  max-width: 12.5rem;
}
.price {
  color: $suvaGrey;
}
</style>
