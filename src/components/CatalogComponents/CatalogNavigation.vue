<template>
  <div class="py-4 d-flex flex-column flex-md-row gr-4 justify-space-between">
    <router-link
      v-for="route in routes"
      :key="route.id"
      :to="{ name: 'catalog-by-type', params: { clothingType: route.title.en } }"
      class="nav-item"
    >
      <p class="nav-item__title">{{ route.title[$i18n.locale] }}</p>
      <img :src="route.imgSrc" class="nav-item__image" />
    </router-link>
  </div>
</template>

<script setup>
const routes = [
  {
    id: 1,
    title: {
      en: 'shirts',
      uk: 'сорочки'
    },
    imgSrc:
      'https://rockmount.com/cdn/shop/files/dude_model_dude_resized.jpg?v=1688762220&width=1200'
  },
  {
    id: 2,
    title: {
      en: 't-shirts',
      uk: 'футболки'
    },
    imgSrc:
      'https://www.rollingstone.com/wp-content/uploads/2023/10/Best-Tees-Shirts-Rolling-Stone-4.jpg?w=819'
  },
  {
    id: 3,
    title: {
      en: 'sweatshirts',
      uk: 'світшоти'
    },
    imgSrc:
      'https://underarmour.scene7.com/is/image/Underarmour/FW23_BTS_WMN_HP_bucket_4_5?qlt=75&fmt=jpg&wid=640&op_sharpen=1&'
  }
]
</script>

<style lang="scss" scoped>
.nav-item {
  overflow: hidden;
  padding-top: 50%;
  position: relative;
  @media (width > 959.98px) {
    padding-top: 30%;
    width: calc(33.33333% - 10px);
  }
  @media (any-hover: hover) {
    &:hover {
      .nav-item__image {
        transform: scale(1.4);
      }
    }
  }
  // .nav-item__title
  &__title {
    color: #fff;
    font-size: 1.125rem;
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  // .nav-item__image
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95) 0s;
  }
}
</style>
