<template>
  <div class="images-section">
    <div class="images-section__item">
      <img
        src="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div class="images-section__content">
        <h2
          class="title mb-8 mb-sm-15"
          v-html="$t('pages.home.images-container.shirts.title')"
        ></h2>
        <router-link
          :to="{ name: 'catalog-by-type', params: { clothingType: 'shirts' } }"
          class="images-section__link"
        >
          {{ $t('pages.home.images-container.shirts.link') }}
        </router-link>
      </div>
    </div>
    <div class="images-section__item">
      <img
        src="https://images.pexels.com/photos/2033975/pexels-photo-2033975.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <div class="images-section__content">
        <h2
          class="title mb-8 mb-sm-15"
          v-html="$t('pages.home.images-container.t-shirts.title')"
        ></h2>
        <router-link
          :to="{ name: 'catalog-by-type', params: { clothingType: 't-shirts' } }"
          class="images-section__link"
        >
          {{ $t('pages.home.images-container.t-shirts.link') }}
        </router-link>
      </div>
    </div>
    <div class="images-section__item">
      <img
        src="https://images.pexels.com/photos/4066149/pexels-photo-4066149.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <div class="images-section__content images-section__content_left">
        <h2
          class="title mb-8 mb-sm-15"
          v-html="$t('pages.home.images-container.sweatshirts.title')"
        ></h2>
        <router-link
          :to="{ name: 'catalog-by-type', params: { clothingType: 'sweatshirts' } }"
          class="images-section__link"
        >
          {{ $t('pages.home.images-container.sweatshirts.link') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.images-section {
  @media (width > 992px) {
    display: flex;
    flex-wrap: wrap;
  }
  // .images-section__item
  &__item {
    @media (width > 992px) {
      flex: 1 1 50%;
      padding-top: 50%;
    }
    position: relative;
    padding-top: 100%;
    &::before {
      content: '';
      z-index: 2;
      background-color: rgba(14, 5, 4, 0.25);
    }
    &::before,
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    img {
      z-index: 1;
      object-fit: cover;
    }
  }
  // .images-section__content
  &__content {
    text-align: center;
    position: absolute;
    top: 34.72%;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, 0);
    .title {
      color: #fff;
    }
    // .images-section__content_left
    &_left {
      @media (width > 992px) {
        left: 12.85%;
        transform: translate(0);
      }
    }
  }
  // .images-section__link
  &__link {
    color: #fff;
    font-size: 0.75rem;
    line-height: 1.6;
    display: inline-block;
    position: relative;
    padding-bottom: 0.375rem;
    text-transform: uppercase;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: #fff;
    }
  }
}
</style>
