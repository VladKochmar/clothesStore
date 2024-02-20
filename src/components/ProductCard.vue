<template>
  <div class="product-card">
    <div class="product-card__header mb-6">
      <router-link :to="{ name: 'home' }" class="product-card__img">
        <img src="https://content.rozetka.com.ua/goods/images/big_tile/396786021.jpg" alt="" />
      </router-link>
      <v-btn
        icon="far fa-heart"
        color="pinkSwan"
        variant="outlined"
        size="small"
        class="product-card__btn"
      ></v-btn>
      <div class="product-card__info">3 for $30</div>
    </div>
    <div class="product-card__body">
      <router-link :to="{ name: 'home' }" class="product-card__title mb-2">
        Stefi Push Up BH schwarz
      </router-link>
      <div class="product-card__price d-flex ga-2">
        <span class="product-card__old">80,00€</span><span class="product-card__new">69,00€</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.product-card {
  max-width: 390px;
  // .product-card__header
  &__header {
    position: relative;
  }
  // .product-card__img
  &__img {
    display: block;
    position: relative;
    padding-top: 115.384615%;
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
  // .product-card__btn
  &__btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: #fff;
  }
  // .product-card__info
  &__info {
    position: absolute;
    left: 0;
    top: 1.5rem;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 133.333333%;
    padding: 0.75rem 1rem;
    background-color: #fff;
  }
  // .product-card__body
  &__body {
  }
  // .product-card__title
  &__title {
    display: inline-block;
    font-size: 1.375rem;
    line-height: 145.454545%;
    font-family: Inconsolata;
    text-transform: uppercase;
  }
  // .product-card__price
  &__price {
    color: #828282;
    font-weight: 700;
    line-height: 137.5%;
  }
  // .product-card__old
  &__old {
    text-decoration: line-through;
  }
  // .product-card__new
  &__new {
    color: #bd3735;
  }
}
</style>
