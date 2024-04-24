<template>
  <main-master-page>
    <div class="cart">
      <div class="cart__container">
        <div class="d-flex flex-column flex-sm-row justify-space-between gc-6 gr-15">
          <body-component />
          <order-summary />
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import BodyComponent from '@/components/cart/BodyComponent.vue'
import OrderSummary from '@/components/cart/OrderSummary.vue'
</script>

<style lang="scss" scoped>
.cart {
  padding: 4rem 0 5.625rem;
}
</style>
