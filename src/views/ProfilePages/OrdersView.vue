<template>
  <profile-master-page>
    <div>
      <h1 class="title mb-10">{{ $t('pages.orders.title') }}</h1>
      <v-expansion-panels variant="accordion">
        <v-expansion-panel v-for="order in getCurrentUser.history" :key="order.id">
          <v-expansion-panel-title class="order d-flex align-center gc-4 gc-sm-6">
            <div class="order__info">
              <span>№ {{ order.number }}</span>
              <time>{{ order.date }}</time>
            </div>
            <div class="order__images-list d-inline-flex gc-2">
              <img
                v-for="(item, index) in order.orders"
                :key="index"
                :src="item.imgSrc"
                class="order-image"
              />
            </div>
            <span>
              Total: <strong>{{ order.orders.length }} {{ $t('pages.orders.items') }}</strong>
              {{ $t('pages.orders.for') }}
              <strong>{{ order.subtotal }}€</strong>
            </span>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div
              v-for="(item, index) in order.orders"
              :key="index"
              class="order-product py-6 d-flex justify-space-between gc-sm-6 gc-4"
            >
              <div class="d-flex gc-sm-6 gc-4">
                <img :src="item.imgSrc" class="order-product__img" />
                <div>
                  <h2 class="order-product__title mb-2">
                    <router-link :to="{ name: 'product', params: { productId: item.productId } }">
                      {{ item.title }}
                    </router-link>
                  </h2>
                  <div class="d-inline-flex gc-4">
                    <span class="order-product__text"
                      >{{ $t('pages.orders.size') }} {{ item.size }}</span
                    >
                    <span class="order-product__text"
                      >{{ $t('pages.orders.color') }} {{ item.color }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="order-product__prices">
                <span class="order-product__text">{{ item.quantity }} x {{ item.price }}</span>
                <span class="order-product__price">{{ item.totalPrice }}</span>
              </div>
            </div>
            <div class="d-flex justify-end">
              <table class="table">
                <tr>
                  <td class="pr-6 pt-5">{{ $t('pages.orders.subtotal') }}</td>
                  <td class="pt-5 font-weight-bold">{{ order.subtotal }}€</td>
                </tr>
                <tr>
                  <td class="discount pr-6 pt-5">{{ $t('pages.orders.shipping') }}</td>
                  <td class="discount pt-5">{{ order.shipping }}€</td>
                </tr>
                <tr>
                  <td class="pr-6 pt-5">{{ $t('pages.orders.total') }}</td>
                  <td class="pt-5 font-weight-bold">{{ order.total }}€</td>
                </tr>
              </table>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </profile-master-page>
</template>

<script setup>
import { toRefs } from 'vue'

import ProfileMasterPage from '@/masterpages/ProfileMasterPage.vue'

// Getting User data
import { useUsersStore } from '@/stores/users'
const { getCurrentUser } = toRefs(useUsersStore())
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base/variables';

.order {
  font-size: 0.875rem;
  @media (width < 899.98px) {
    font-size: 0.75rem;
  }
  // .order__info
  &__info {
    display: inline-flex;
    gap: 0.5rem 1.25rem;
    @media (width < 899.98px) {
      flex-direction: column;
    }
  }
  // .order__images-list
  &__images-list {
    img {
      @media (width < 899.98px) {
        display: none;
        &:nth-child(1) {
          display: block;
        }
      }
    }
  }
}
.order-image {
  max-width: 2.25rem;
}
.table {
  font-size: 0.875rem;
}
.discount {
  color: $suvaGrey;
}

.order-product {
  border-top: 1px solid $suvaGrey;
  font-size: 0.875rem;
  @media (width < 424.98px) {
    font-size: 0.75rem;
  }
  // .order-product__img
  &__img {
    max-width: 5.5rem;
    max-height: 5.5rem;
    @media (width < 700.98px) {
      max-width: 3rem;
      max-height: 3rem;
    }
  }
  // .order-product__title
  &__title {
    font-size: 1rem;
    text-transform: uppercase;
    @media (width < 700.98px) {
      font-size: 0.875rem;
    }
  }
  // .order-product__text
  &__text {
    color: $suvaGrey;
    white-space: nowrap;
  }
  // .order-product__price
  &__price {
    font-weight: 700;
  }
  // .order-product__prices
  &__prices {
    display: inline-flex;
    gap: 0.625rem 1.5rem;
    @media (width < 424.98px) {
      flex-direction: column;
      align-items: flex-end;
    }
  }
}
</style>
