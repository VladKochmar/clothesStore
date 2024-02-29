<template>
  <div class="benefits">
    <div class="benefits__container">
      <ul class="d-md-flex justify-md-space-between">
        <li v-for="benefit in benefits" :key="benefit.id" class="d-flex ga-6 ga-lg-10 mb-6 mb-md-0">
          <v-icon :icon="benefit.icon"></v-icon>
          <div>
            <strong class="mb-2">{{ benefit.title.en }}</strong>
            <p class="text">{{ benefit.text.en }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import benefits from '@/data/benefits.json'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables.scss';
.benefits {
  padding: 5.625rem 0 3.75rem;
  @media (width < 992px) {
    padding: 3.125rem 0 2.5rem;
  }
  // .benefits__container
  &__container {
  }
}
.text {
  color: $dimGray;
  font-size: 0.875rem;
}
</style>
