<template>
  <ul>
    <li v-for="product in productsList" :key="product.id">
      <router-link :to="{ name: 'catalog' }" class="searched-item">
        <img :src="product.imgSrc" class="searched-item__img" />
        <strong>{{ product.title }}</strong>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  productsList: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.searched-item {
  display: flex;
  align-items: center;
  gap: 0 1.25rem;
  padding: 0.75rem 1rem;
  transition: background 0.3s ease 0s;
  @media (any-hover: hover) {
    &:hover {
      background-color: rgba(102, 102, 102, 0.4);
    }
  }
  // .searched-item__img
  &__img {
    max-width: 2.25rem;
  }
}
</style>
