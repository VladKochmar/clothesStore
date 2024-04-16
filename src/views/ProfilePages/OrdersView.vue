<template>
  <profile-master-page>
    <div>
      <h1 class="title mb-10">{{ $t('pages.orders.title') }}</h1>
      <v-expansion-panels variant="accordion">
        <v-expansion-panel v-for="index in 3" :key="index">
          <v-expansion-panel-title class="order d-flex align-center gc-4 gc-sm-6">
            <div class="order__info"><span>№ 98524536</span><time>12.02.21</time></div>
            <div class="order__images-list d-inline-flex gc-2">
              <img
                src="https://m.media-amazon.com/images/I/61TuJysnG7L._AC_UY1000_.jpg"
                alt=""
                class="order-image"
              />
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                class="order-image"
              />
              <img
                src="https://www.alcott.eu/dw/image/v2/BDJZ_PRD/on/demandware.static/-/Sites-catalog-alcott-master/default/dw255127a1/hi-res/FE10273UOX13_SA2_001.jpg?sw=1000&sh=1350&q=90&strip=false"
                alt=""
                class="order-image"
              />
            </div>
            <span>
              Total: <strong>2 items</strong> for
              <strong>€130.00</strong>
            </span>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div
              v-for="index in 3"
              :key="index"
              class="order-product py-6 d-flex justify-space-between gc-sm-6 gc-4"
            >
              <div class="d-flex gc-sm-6 gc-4">
                <img
                  src="https://m.media-amazon.com/images/I/61TuJysnG7L._AC_UY1000_.jpg"
                  class="order-product__img"
                />
                <div>
                  <h2 class="order-product__title mb-2">
                    <router-link :to="{ name: 'catalog' }">
                      Stefi Push Up BH schwarzH schwarz
                    </router-link>
                  </h2>
                  <div class="d-inline-flex gc-4">
                    <span class="order-product__text">Size: 36-38</span>
                    <span class="order-product__text">Color: Black</span>
                  </div>
                </div>
              </div>
              <div class="order-product__prices">
                <span class="order-product__text">1 x $400</span>
                <span class="order-product__price">$400</span>
              </div>
            </div>
            <div class="d-flex justify-end">
              <table class="table">
                <tr>
                  <td class="pr-6 pt-5">Subtotal</td>
                  <td class="pt-5 font-weight-bold">€ 24.99</td>
                </tr>
                <tr>
                  <td class="discount pr-6 pt-5">Discounts</td>
                  <td class="discount pt-5">€ 13.00</td>
                </tr>
                <tr>
                  <td class="pr-6 pt-5">Total</td>
                  <td class="pt-5 font-weight-bold">€500.00</td>
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
import ProfileMasterPage from '@/masterpages/ProfileMasterPage.vue'
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
