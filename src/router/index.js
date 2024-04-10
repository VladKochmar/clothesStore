import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/AboutUsView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/CommonCatalog.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/catalog/:clothingType',
      name: 'catalog-by-type',
      component: () => import('@/views/CatalogView.vue'),
      props: true,
      meta: {
        requiresAuth: false
      },
      beforeEnter: (to) => {
        const clothingExists = validateClothingType(to.params.clothingType)
        if (!clothingExists) return { name: 'page-not-found' }
      }
    },
    {
      path: '/my-profile',
      name: 'profile',
      component: () => import('@/views/ProfilePages/MyDetails.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:path(.*)*',
      name: 'page-not-found',
      component: () => import('@/views/PageNotFound.vue')
    }
  ]
})

import { useAuthStore } from '@/stores/auth'

function getCurrentUser() {
  const authStore = useAuthStore()
  return new Promise((resolve, reject) => {
    const resolveListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        resolveListener()
        authStore.setUser(user)
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  document.body.classList.remove('lock')
  const currentUser = await getCurrentUser()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (currentUser) {
      next()
    } else {
      alert("You don't have access!")
      next('/')
    }
  } else {
    next()
  }
})

function validateClothingType(clothingType) {
  const validTypes = ['t-shirts', 'shirts', 'sweatshirts']
  return validTypes.includes(clothingType)
}

export default router
