<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li v-for="item in linksList" :key="item.id" class="link-item">
          <router-link :to="{ name: item.link }">{{ item.title[$i18n.locale] }}</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const linksList = [
  { id: 1, title: { uk: 'Контакти', en: 'Contacts' }, link: 'contacts' },
  { id: 2, title: { uk: 'Повернення', en: 'Returns' }, link: 'returns' },
  { id: 3, title: { uk: 'Оплата', en: 'Payments' }, link: 'payments' },
  { id: 4, title: { uk: 'Відправлення та доставка', en: 'Shipping & Delivery' }, link: 'delivery' }
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.sidebar {
  flex: 0 0 250px;
  @media (width < 767.98px) {
    display: none;
  }
}

.link-item {
  color: $dimGray;
  font-size: 0.875rem;
  line-height: 142.857143%;
  .router-link-active.router-link-exact-active {
    color: $black;
  }
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}
</style>
