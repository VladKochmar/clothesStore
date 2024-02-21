<script setup>
import ProductsSlider from '@/components/ProductsSlider.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { ref } from 'vue'

const productsLsit = ref([
  {
    id: 1,
    title: 'STEFI PUSH UP BH SCHWARZ',
    price: '80,00€',
    discount: '60,00€',
    label: '3 for $30',
    imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/300057536.jpg'
  },
  {
    id: 2,
    title: 'STEFI PUSH UP BH SCHWARZ',
    price: '80,00€',
    discount: '60,00€',
    label: '3 for $30',
    imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/300057536.jpg'
  },
  {
    id: 3,
    title: 'STEFI PUSH UP BH SCHWARZ',
    price: '80,00€',
    discount: '60,00€',
    label: '3 for $30',
    imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/300057536.jpg'
  },
  {
    id: 4,
    title: 'STEFI PUSH UP BH SCHWARZ',
    price: '80,00€',
    discount: '60,00€',
    label: '3 for $30',
    imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/300057536.jpg'
  },
  {
    id: 5,
    title: 'STEFI PUSH UP BH SCHWARZ',
    price: '80,00€',
    discount: '60,00€',
    label: '3 for $30',
    imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/300057536.jpg'
  },
  {
    id: 6,
    title: 'STEFI PUSH UP BH SCHWARZ',
    price: '80,00€',
    discount: '60,00€',
    label: '3 for $30',
    imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/300057536.jpg'
  }
])
</script>

<template>
  <main-master-page>
    <div class="p">
      <div class="p__container">
        <products-slider :products-list="productsLsit" />
      </div>
    </div>
  </main-master-page>
</template>
