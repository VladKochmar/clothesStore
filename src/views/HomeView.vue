<script setup>
import ProductCard from '@/components/ProductCard.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
</script>

<template>
  <main-master-page>
    <product-card
      :product-data="{
        id: 1,
        title: 'STEFI PUSH UP BH SCHWARZ',
        price: '80,00€',
        discount: '60,00€',
        label: '3 for $30',
        imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/300057536.jpg'
      }"
    />
  </main-master-page>
</template>
