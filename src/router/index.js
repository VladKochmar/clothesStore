import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/CommonCatalog.vue')
    },
    {
      path: '/catalog/:clothingType',
      name: 'catalog-by-type',
      component: () => import('@/views/CatalogView.vue'),
      props: true,
      beforeEnter: (to) => {
        const clothingExists = validateClothingType(to.params.clothingType)
        if (!clothingExists) return { name: 'page-not-found' }
      }
    },
    {
      path: '/:path(.*)*',
      name: 'page-not-found',
      component: () => import('@/views/PageNotFound.vue')
    }
  ]
})

function validateClothingType(clothingType) {
  const validTypes = ['t-shirts', 'shirts', 'sweatshirts']
  return validTypes.includes(clothingType)
}

export default router
