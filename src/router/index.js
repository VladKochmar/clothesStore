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
      path: '/product/:productId',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      props: true,
      meta: {
        requiresAuth: false
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
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/documentations/OurContacts.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/payments',
      name: 'payments',
      component: () => import('@/views/documentations/PaymentsView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import('@/views/documentations/DeliveryView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/returns',
      name: 'returns',
      component: () => import('@/views/documentations/ReturnsView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/my-addresses',
      name: 'addresses',
      component: () => import('@/views/ProfilePages/MyAddresses.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/my-orders',
      name: 'orders',
      component: () => import('@/views/ProfilePages/OrdersView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/my-wishlist',
      name: 'wishlist',
      component: () => import('@/views/WishlistView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/my-cart',
      name: 'cart',
      component: () => import('@/views/MyCartView.vue'),
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
import { useUsersStore } from '@/stores/users'

function getCurrentUser() {
  const authStore = useAuthStore()
  const usersStore = useUsersStore()
  return new Promise((resolve, reject) => {
    const resolveListener = onAuthStateChanged(
      getAuth(),
      async (user) => {
        resolveListener()
        authStore.setUser(user)
        await usersStore.loadUserById(user?.uid)
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
